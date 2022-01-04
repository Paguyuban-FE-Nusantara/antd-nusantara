import { Col, Row, Select, TableProps } from 'antd';
import * as React from 'react';
import TableWrapper from './style';
import Table from "../table";
import Pagination from "../pagination";

export interface ITableLocalProps<T extends object> extends TableProps<T> {
  orderingNumber?: number;
  withNumber?: boolean;
}

const { Option } = Select;

const startPage = 1;

const TableLocal = <T extends object = object>(props: ITableLocalProps<T>) => {
  const { dataSource, columns = [], orderingNumber, withNumber = false, ...rest } = props;

  const [currentPage, setCurrentPage] = React.useState(startPage);
  const [pageSize, setPageSize] = React.useState(5);

  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return dataSource?.slice(firstPageIndex, lastPageIndex);
  }, [dataSource, pageSize, currentPage]);

  const numberColumn = [
    {
      title: 'No',
      key: 'index',
      width: 30,
      render: (value: any, item: any, index: number) => (currentPage - 1) * pageSize + (index + 1),
    },
  ];

  const onSizeChange = (size: React.SetStateAction<number>) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = currentPage * pageSize;
  const total = dataSource?.length;

  return (
    <TableWrapper>
      <Row>
        <Col span={24}>
          <Table
            rowClassName={(record: any, index: number) =>
              index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
            }
            dataSource={currentTableData}
            pagination={false}
            columns={withNumber ? [...numberColumn, ...columns] : columns}
            {...rest}
          />
        </Col>
      </Row>
      <Row justify="end" align="middle" className="action-bottom">
        <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 12 }}>
          <Row justify="end" gutter={24}>
            <Col>Baris per halaman</Col>
            <Col>
              <Select className="select-size" defaultValue={pageSize} onChange={onSizeChange}>
                <Option value={5}>5</Option>
                <Option value={10}>10</Option>
                <Option value={20}>20</Option>
              </Select>
            </Col>
          </Row>
        </Col>
        <Col xl={{ span: 3 }} lg={{ span: 4 }} md={{ span: 12 }} className="text-right">
          {startItem} - {endItem} dari {total}
        </Col>
        <Col xl={{ span: 4 }} lg={{ span: 7 }} md={{ span: 12 }} className="text-right">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={total || 0}
            pageSize={pageSize}
            onPageChange={(page: React.SetStateAction<number>) => setCurrentPage(page)}
          />
        </Col>
      </Row>
    </TableWrapper>
  );
};

export default TableLocal;
