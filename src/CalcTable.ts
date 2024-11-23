import { Element, Parent } from 'hast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

import { type MethodType, MethodTypes, CalcMethod } from './CalcMethod';

function extractBody(table: Element): TableData {
  let tableData: TableData = [];

  visit(table, { type: 'element', tagName: 'tbody' }, (tbody) => {
    visit(tbody, { type: 'element', tagName: 'tr' }, (tr) => {
      let row: Array<any> = [];
      visit(tr, { type: 'element', tagName: 'td' }, (td) => {
        visit(td, 'text', (tdText) => {
          row.push(tdText.value);
        });
      });
      tableData.push(row);
    });
  });
  return tableData;
}

function getReplaceCellPositions(data: TableData): Array<{ row: number; column: number; methodType: MethodType }> {
  const replaceCellPositions = [];

  for (let row = 0; row < data.length; row++) {
    for (let column = 0; column < data[row].length; column++) {
      const value = data[row][column].trim();
      if (MethodTypes.includes(value)) {
        replaceCellPositions.push({ row, column, methodType: value });
      }
    }
  }

  return replaceCellPositions;
}

function handleCalcMethod(
  data: TableData,
  calcData: Array<{ row: number; column: number; methodType: MethodType }>,
): Array<{ row: number; column: number; calcResult?: number }> {
  const calculatedData: Array<{ row: number; column: number; calcResult?: number }> = [];
  calcData.forEach(({ row, column, methodType }) => {
    const calcResult = CalcMethod[methodType](data, { row, column });
    calculatedData.push({ row, column, calcResult });
  });

  return calculatedData;
}

function replaceCalculatedData(table: Element, calculatedData: Array<{ row: number; column: number; calcResult?: number }>) {
  let row = 0,
    col = 0;

  visit(table, { type: 'element', tagName: 'tbody' }, (tbody) => {
    row = 0;
    visit(tbody, { type: 'element', tagName: 'tr' }, (tr) => {
      col = 0;
      visit(tr, { type: 'element', tagName: 'td' }, (td) => {
        const d = calculatedData.find((it) => it.row == row && it.column == col);
        col++;
        if (d == null) return;

        visit(td, 'text', (tdText) => {
          tdText.value = d.calcResult?.toString() || '!CalcErr!';
        });
      });
      row++;
    });
  });
}

/**
 * unified plugin that calculate proprietary methods in `table` element
 *
 * @returns unified plugin
 */
export const calcTable: Plugin = () => {
  return (tree) => {
    visit(tree, { type: 'element', tagName: 'table' }, (node: Element, index, parent: Parent) => {
      if (parent == null || index == null) return;

      const body = extractBody(node);
      const replaceCellPositions = getReplaceCellPositions(body);
      const calculatedData = handleCalcMethod(body, replaceCellPositions);

      replaceCalculatedData(node, calculatedData);
    });
  };
};
