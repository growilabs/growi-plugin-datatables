import type { Node } from 'unist';

/**
 * Extend Node type for GROWI's node
 * ref. https://github.com/goofmint/growi-plugin-table-grid/blob/40d7b377bba8b9d73e4e72b05b255f73842f3e83/src/tableGrid.ts#L9-L21
 */
interface GrowiNode extends Node {
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
