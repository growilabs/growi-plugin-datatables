import type { Node } from 'unist';

/**
 * Extend Node type for GROWI's node
 * ref. https://github.com/goofmint/growi-plugin-table-grid/blob/40d7b377bba8b9d73e4e72b05b255f73842f3e83/src/tableGrid.ts#L9-L21
 */
export interface GrowiNode extends Node {
  tagName: string;
  type: string;
  id: string;
  attributes: { [key: string]: string };
  children: GrowiNode[];
  properties: {
    className: string;
    'data-line': number;
    id: string;
  };
  value: string;
}

function isGrowiNode(node: unknown): node is GrowiNode {
  if (node == null || typeof node !== 'object') {
    return false;
  }

  const candidate = node as GrowiNode;

  // 必須プロパティの存在チェック
  if (
    !('tagName' in candidate) ||
    !('type' in candidate) ||
    !('id' in candidate) ||
    !('attributes' in candidate) ||
    !('children' in candidate) ||
    !('properties' in candidate) ||
    !('value' in candidate)
  ) {
    return false;
  }

  // 型チェック
  if (
    typeof candidate.tagName !== 'string' ||
    typeof candidate.type !== 'string' ||
    typeof candidate.id !== 'string' ||
    typeof candidate.value !== 'string' ||
    !Array.isArray(candidate.children) ||
    typeof candidate.attributes !== 'object'
  ) {
    return false;
  }

  // propertiesの型チェック
  if (
    !candidate.properties ||
    typeof candidate.properties !== 'object' ||
    !('className' in candidate.properties) ||
    !('data-line' in candidate.properties) ||
    !('id' in candidate.properties) ||
    typeof candidate.properties.className !== 'string' ||
    typeof candidate.properties['data-line'] !== 'number' ||
    typeof candidate.properties.id !== 'string'
  ) {
    return false;
  }

  // childrenの再帰的チェック
  return candidate.children.every(isGrowiNode);
}
