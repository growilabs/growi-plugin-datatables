import DataTables from 'datatables.net-bs4';
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import './DataTables.css';

export const wrapDatatables = (Table: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, ...props }) => {
    let isDataTablesEnabled = false;

    const id = uuidv4();
    const dataTableOptions = {
      dom: 'ft<"mb-3"ilp>',
      paging: false,
      scrollCollapse: true,
      scrollY: '500px'
    };

    const clickHandler = async() => {
      new DataTables(`#${id} table`, dataTableOptions);
      isDataTablesEnabled = true;
    };

    return (
      <div id={id}>
        { !isDataTablesEnabled &&
          <button onClick={clickHandler}>Enable</button> }
        <Table {...props}>
          {children}
        </Table>
      </div>
    );
  };
};
