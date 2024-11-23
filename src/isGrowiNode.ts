import type { GrowiNode } from './GrowiNode';

/**
 * GrowiNode インターフェースの型チェックを行う関数
 * @param node 検証対象のオブジェクト
 * @returns boolean - GrowiNode インターフェースを満たしているかどうか
 */
export function isGrowiNode(node: unknown): node is GrowiNode {
  if (node == null || typeof node !== 'object') {
    return false;
  }

  // 基本的なプロパティの存在チェック
  const requiredProps = ['tagName', 'type', 'id', 'attributes', 'children', 'properties', 'value'];
  for (const prop of requiredProps) {
    if (!(prop in node)) {
      return false;
    }
  }

  const typedNode = node as Record<string, unknown>;

  // 各プロパティの型チェック
  if (typeof typedNode.tagName !== 'string') return false;
  if (typeof typedNode.type !== 'string') return false;
  if (typeof typedNode.id !== 'string') return false;

  // attributes のチェック
  if (!isAttributesObject(typedNode.attributes)) return false;

  // children のチェック
  if (!Array.isArray(typedNode.children)) return false;
  for (const child of typedNode.children) {
    if (!isGrowiNode(child)) return false;
  }

  // properties のチェック
  if (!isGrowiNodeProperties(typedNode.properties)) return false;

  // value のチェック
  if (typeof typedNode.value !== 'string') return false;

  return true;
}

/**
 * attributes オブジェクトの型チェック
 */
function isAttributesObject(attributes: unknown): attributes is { [key: string]: string } {
  if (attributes == null || typeof attributes !== 'object') {
    return false;
  }

  return Object.entries(attributes).every(([key, value]) => typeof key === 'string' && typeof value === 'string');
}

/**
 * properties オブジェクトの型チェック
 */
function isGrowiNodeProperties(properties: unknown): properties is { className: string; 'data-line': number; id: string } {
  if (properties == null || typeof properties !== 'object') {
    return false;
  }

  const typedProps = properties as Record<string, unknown>;

  return typeof typedProps.className === 'string' && typeof typedProps['data-line'] === 'number' && typeof typedProps.id === 'string';
}
