import { Col, Row, Select, Space, TableProps } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import TableWrapper from './style';
import Table from "../table";
import Pagination from "../pagination";
import {IInfoPaging} from "../../interface";

interface ITableRemoteProps<T extends object> extends TableProps<T> {
  orderingNumber?: number;
  withNumber?: boolean;
  infoPaging?: IInfoPaging;
  onPageChange: Function;
  onSizeChange:
    | ((value: number, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
  showPagination?: boolean;
}

const { Option } = Select;

const TableRemote = <T extends object = object>(props: ITableRemoteProps<T>) => {
  const {
    dataSource = [],
    columns = [],
    onPageChange,
    onSizeChange = () => {},
    infoPaging,
    withNumber = false,
    showPagination = true,
    ...rest
  } = props;
  const total = infoPaging?.total || 0;
  const currentPage = infoPaging?.currentPage || 1;
  const pageSize = infoPaging?.pageSize || 5;
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = currentPage * pageSize;

  const numberColumn = [
    {
      title: 'No',
      key: 'index',
      render: (value: any, item: any, index: number) => (currentPage - 1) * pageSize + (index + 1),
    },
  ];

  return (
    <TableWrapper>
      <Row>
        <Col span={24}>
          <Table
            rowClassName={(record, index) =>
              index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
            }
            dataSource={dataSource}
            pagination={false}
            columns={withNumber ? [...numberColumn, ...columns] : columns}
            {...rest}
          />
        </Col>
      </Row>

      {showPagination !== false && (
        <Space size={24} className="action-bottom">
          <div>Baris per halaman</div>
          <div>
            <Select className="select-size" value={pageSize} onChange={onSizeChange}>
              <Option value={5}>5</Option>
              <Option value={10}>10</Option>
              <Option value={20}>20</Option>
            </Select>
          </div>

          <div className="text-right">
            {startItem} - {endItem} dari {total}
          </div>

          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={total}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </Space>
      )}
    </TableWrapper>
  );
};

export default TableRemote;
