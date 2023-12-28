import DataTables from 'datatables.net';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from "react";

export const wrapDatatables = (Table: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  const id = uuidv4();
  return ({ children, ...props }) => {
    useEffect(() => {
      console.log();
      new DataTables(`#${id} table`);
    }, []);

    return (
      <div id={id}>
        <Table {...props}>
          {children}
        </Table>
      </div>
    );
  };
};
