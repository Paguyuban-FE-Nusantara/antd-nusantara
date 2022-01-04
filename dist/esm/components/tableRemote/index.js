const _excluded = ["dataSource", "columns", "onPageChange", "onSizeChange", "infoPaging", "withNumber", "showPagination"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { Col, Row, Select, Space } from 'antd';
import TableWrapper from './style';
import Table from "../table";
import Pagination from "../pagination";
const {
  Option
} = Select;

const TableRemote = props => {
  const {
    dataSource = [],
    columns = [],
    onPageChange,
    onSizeChange = () => {},
    infoPaging,
    withNumber = false,
    showPagination = true
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const total = infoPaging?.total || 0;
  const currentPage = infoPaging?.currentPage || 1;
  const pageSize = infoPaging?.pageSize || 5;
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = currentPage * pageSize;
  const numberColumn = [{
    title: 'No',
    key: 'index',
    render: (value, item, index) => (currentPage - 1) * pageSize + (index + 1)
  }];
  return /*#__PURE__*/React.createElement(TableWrapper, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(Table, _extends({
    rowClassName: (record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark',
    dataSource: dataSource,
    pagination: false,
    columns: withNumber ? [...numberColumn, ...columns] : columns
  }, rest)))), showPagination !== false && /*#__PURE__*/React.createElement(Space, {
    size: 24,
    className: "action-bottom"
  }, /*#__PURE__*/React.createElement("div", null, "Baris per halaman"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Select, {
    className: "select-size",
    value: pageSize,
    onChange: onSizeChange
  }, /*#__PURE__*/React.createElement(Option, {
    value: 5
  }, "5"), /*#__PURE__*/React.createElement(Option, {
    value: 10
  }, "10"), /*#__PURE__*/React.createElement(Option, {
    value: 20
  }, "20"))), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, startItem, " - ", endItem, " dari ", total), /*#__PURE__*/React.createElement(Pagination, {
    className: "pagination-bar",
    currentPage: currentPage,
    totalCount: total,
    pageSize: pageSize,
    onPageChange: onPageChange
  })));
};

export default TableRemote;
//# sourceMappingURL=index.js.map