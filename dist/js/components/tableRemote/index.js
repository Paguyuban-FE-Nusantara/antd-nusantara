"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _style = _interopRequireDefault(require("./style"));

var _table = _interopRequireDefault(require("../table"));

var _pagination = _interopRequireDefault(require("../pagination"));

var React = _interopRequireWildcard(require("react"));

var _excluded = ["dataSource", "columns", "onPageChange", "onSizeChange", "infoPaging", "withNumber", "showPagination"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Option = _antd.Select.Option;

var TableRemote = function TableRemote(props) {
  var _props$dataSource = props.dataSource,
      dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? [] : _props$columns,
      onPageChange = props.onPageChange,
      _props$onSizeChange = props.onSizeChange,
      onSizeChange = _props$onSizeChange === void 0 ? function () {} : _props$onSizeChange,
      infoPaging = props.infoPaging,
      _props$withNumber = props.withNumber,
      withNumber = _props$withNumber === void 0 ? false : _props$withNumber,
      _props$showPagination = props.showPagination,
      showPagination = _props$showPagination === void 0 ? true : _props$showPagination,
      rest = _objectWithoutProperties(props, _excluded);

  var total = (infoPaging === null || infoPaging === void 0 ? void 0 : infoPaging.total) || 0;
  var currentPage = (infoPaging === null || infoPaging === void 0 ? void 0 : infoPaging.currentPage) || 1;
  var pageSize = (infoPaging === null || infoPaging === void 0 ? void 0 : infoPaging.pageSize) || 5;
  var startItem = (currentPage - 1) * pageSize + 1;
  var endItem = currentPage * pageSize;
  var numberColumn = [{
    title: 'No',
    key: 'index',
    render: function render(value, item, index) {
      return (currentPage - 1) * pageSize + (index + 1);
    }
  }];
  return /*#__PURE__*/React.createElement(_style.default, null, /*#__PURE__*/React.createElement(_antd.Row, null, /*#__PURE__*/React.createElement(_antd.Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(_table.default, _extends({
    rowClassName: function rowClassName(record, index) {
      return index % 2 === 0 ? 'table-row-light' : 'table-row-dark';
    },
    dataSource: dataSource,
    pagination: false,
    columns: withNumber ? [].concat(numberColumn, _toConsumableArray(columns)) : columns
  }, rest)))), showPagination !== false && /*#__PURE__*/React.createElement(_antd.Space, {
    size: 24,
    className: "action-bottom"
  }, /*#__PURE__*/React.createElement("div", null, "Baris per halaman"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_antd.Select, {
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
  }, startItem, " - ", endItem, " dari ", total), /*#__PURE__*/React.createElement(_pagination.default, {
    className: "pagination-bar",
    currentPage: currentPage,
    totalCount: total,
    pageSize: pageSize,
    onPageChange: onPageChange
  })));
};

TableRemote.propTypes = {
  orderingNumber: _propTypes.default.number,
  withNumber: _propTypes.default.bool,
  showPagination: _propTypes.default.bool
};
var _default = TableRemote;
exports.default = _default;
//# sourceMappingURL=index.js.map