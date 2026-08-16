/*
 * DataTables が動かした <table> を、React から見て「まだ元の親の子」に見せるための橋渡し。
 *
 * 背景:
 *   React は要素を挿すとき parent.insertBefore(新しい要素, 次の兄弟) を呼ぶ。
 *   GROWI の TableWithEditButton は編集ボタンを <table> より前に条件付きで置くので、
 *   ボタンを出すときの「次の兄弟」はその <table> になる。
 *   ところが DataTables は <table> を自前の div.dt-container の中へ移してしまうため、
 *   <table> はもう元の親の子ではなく、insertBefore が例外を投げる
 *   (Node.insertBefore: Child to insert before is not a child of this node)。
 *
 *   これは他人 (React) の管理下の DOM をこのプラグインが動かしたことで生じた不整合なので、
 *   動かした側で辻褄を合わせる。元の親の insertBefore / removeChild を差し替え、
 *   <table> を指す操作を div.dt-container に読み替える。
 *
 * 差し替えるのは「そのテーブルの元の親」1 要素のインスタンスプロパティだけで、
 * Node.prototype には触らない。解除時には元に戻す。
 */

type Bridge = {
  /** DataTables に移された table 本体 */
  table: Node;
  /** table を抱えている DataTables のコンテナ。元の親から見た table の代役 */
  stand: Node;
};

const bridges = new WeakMap<Node, Bridge>();

/**
 * 元の親から見たときの代役に読み替える。
 *
 * 既に親の子であるノードはそのまま返す。
 * 解除済みなどで代役も外れている場合は null にして、insertBefore を append に倒す。
 */
const substitute = (parent: Node, node: Node | null): Node | null => {
  if (node == null || node.parentNode === parent) return node;

  const bridge = bridges.get(parent);
  if (bridge == null || node !== bridge.table) return node;

  return bridge.stand.parentNode === parent ? bridge.stand : null;
};

/**
 * 元の親に読み替えを仕込む。
 *
 * @param parent DataTables 初期化前に table が属していた親
 * @param table  DataTables に移された table
 * @param stand  table を抱えているコンテナ (元の親の直下にある)
 */
export const bridgeMovedTable = (parent: Node, table: Node, stand: Node): void => {
  const alreadyBridged = bridges.has(parent);
  bridges.set(parent, { table, stand });

  // 同じ親に二重に差し替えない (テーブルが作り直されたときに再度呼ばれる)
  if (alreadyBridged) return;

  Object.defineProperties(parent, {
    insertBefore: {
      configurable: true,
      writable: true,
      value<T extends Node>(this: Node, newNode: T, referenceNode: Node | null): T {
        return Node.prototype.insertBefore.call(this, newNode, substitute(this, referenceNode)) as T;
      },
    },
    removeChild: {
      configurable: true,
      writable: true,
      value<T extends Node>(this: Node, child: T): T {
        /*
         * React が table を消そうとするのは、その部分木ごと捨てるとき。
         * 実際に親の下にあるのはコンテナなので、コンテナごと外す。
         * table 自体はコンテナの中に付いたままになるが、
         * 親から参照が切れるのでまとめて破棄される。
         */
        const target = substitute(this, child);
        if (target == null) return child;

        Node.prototype.removeChild.call(this, target);
        return child;
      },
    },
  });
};

/** 読み替えを外して元の DOM メソッドに戻す */
export const unbridgeMovedTable = (parent: Node): void => {
  if (!bridges.has(parent)) return;

  bridges.delete(parent);
  delete (parent as any).insertBefore;
  delete (parent as any).removeChild;
};
