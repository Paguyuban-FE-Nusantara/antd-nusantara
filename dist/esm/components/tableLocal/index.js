import _pt from "prop-types";
const _excluded = ["dataSource", "columns", "orderingNumber", "withNumber"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { Col, Row, Select } from 'antd';
import * as React from 'react';
import TableWrapper from './style';
import Table from "../table";
import Pagination from "../pagination";
const {
  Option
} = Select;
const startPage = 1;

const TableLocal = props => {
  const {
    dataSource,
    columns = [],
    orderingNumber,
    withNumber = false
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const [currentPage, setCurrentPage] = React.useState(startPage);
  const [pageSize, setPageSize] = React.useState(5);
  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return dataSource?.slice(firstPageIndex, lastPageIndex);
  }, [dataSource, pageSize, currentPage]);
  const numberColumn = [{
    title: 'No',
    key: 'index',
    width: 30,
    render: (value, item, index) => (currentPage - 1) * pageSize + (index + 1)
  }];

  const onSizeChange = size => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = currentPage * pageSize;
  const total = dataSource?.length;
  return /*#__PURE__*/React.createElement(TableWrapper, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(Table, _extends({
    rowClassName: (record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark',
    dataSource: currentTableData,
    pagination: false,
    columns: withNumber ? [...numberColumn, ...columns] : columns
  }, rest)))), /*#__PURE__*/React.createElement(Row, {
    justify: "end",
    align: "middle",
    className: "action-bottom"
  }, /*#__PURE__*/React.createElement(Col, {
    xl: {
      span: 6
    },
    lg: {
      span: 8
    },
    md: {
      span: 12
    }
  }, /*#__PURE__*/React.createElement(Row, {
    justify: "end",
    gutter: 24
  }, /*#__PURE__*/React.createElement(Col, null, "Baris per halaman"), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Select, {
    className: "select-size",
    defaultValue: pageSize,
    onChange: onSizeChange
  }, /*#__PURE__*/React.createElement(Option, {
    value: 5
  }, "5"), /*#__PURE__*/React.createElement(Option, {
    value: 10
  }, "10"), /*#__PURE__*/React.createElement(Option, {
    value: 20
  }, "20"))))), /*#__PURE__*/React.createElement(Col, {
    xl: {
      span: 3
    },
    lg: {
      span: 4
    },
    md: {
      span: 12
    },
    className: "text-right"
  }, startItem, " - ", endItem, " dari ", total), /*#__PURE__*/React.createElement(Col, {
    xl: {
      span: 4
    },
    lg: {
      span: 7
    },
    md: {
      span: 12
    },
    className: "text-right"
  }, /*#__PURE__*/React.createElement(Pagination, {
    className: "pagination-bar",
    currentPage: currentPage,
    totalCount: total || 0,
    pageSize: pageSize,
    onPageChange: page => setCurrentPage(page)
  }))));
};

TableLocal.propTypes = {
  orderingNumber: _pt.number,
  withNumber: _pt.bool
};
export default TableLocal;
//# sourceMappingURL=index.js.map