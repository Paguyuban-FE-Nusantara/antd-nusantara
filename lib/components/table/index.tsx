// @ts-ignore
import { Table, TableProps } from 'antd';
import React from "react"
import TableWrapper from './style';

interface MyTableProps<T extends object> extends TableProps<T> {
  height?: string;
}

const BaseTable = <T extends object = object>(props: MyTableProps<T>) => {
  return (
    <TableWrapper>
      <Table data-testid="table-com" {...props} />
    </TableWrapper>
  );
};

export default BaseTable;
