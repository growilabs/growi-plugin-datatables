import DataTables from 'datatables.net';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from "react";

export const wrapDatatables = (Table: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, ...props }) => {
    const id = uuidv4();

    const clickHandler = async() => {
      new DataTables(`#${id} table`);
    };

    return (
      <div id={id}>
        <button onClick={clickHandler}>Enable</button>
        <Table {...props}>
          {children}
        </Table>
      </div>
    );
  };
};
