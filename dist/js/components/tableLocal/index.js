"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style"));

var _table = _interopRequireDefault(require("../table"));

var _pagination = _interopRequireDefault(require("../pagination"));

var _excluded = ["dataSource", "columns", "orderingNumber", "withNumber"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Option = _antd.Select.Option;
var startPage = 1;

var TableLocal = function TableLocal(props) {
  var dataSource = props.dataSource,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? [] : _props$columns,
      orderingNumber = props.orderingNumber,
      _props$withNumber = props.withNumber,
      withNumber = _props$withNumber === void 0 ? false : _props$withNumber,
      rest = _objectWithoutProperties(props, _excluded);

  var _React$useState = React.useState(startPage),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentPage = _React$useState2[0],
      setCurrentPage = _React$useState2[1];

  var _React$useState3 = React.useState(5),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      pageSize = _React$useState4[0],
      setPageSize = _React$useState4[1];

  var currentTableData = React.useMemo(function () {
    var firstPageIndex = (currentPage - 1) * pageSize;
    var lastPageIndex = firstPageIndex + pageSize;
    return dataSource === null || dataSource === void 0 ? void 0 : dataSource.slice(firstPageIndex, lastPageIndex);
  }, [dataSource, pageSize, currentPage]);
  var numberColumn = [{
    title: 'No',
    key: 'index',
    width: 30,
    render: function render(value, item, index) {
      return (currentPage - 1) * pageSize + (index + 1);
    }
  }];

  var onSizeChange = function onSizeChange(size) {
    setPageSize(size);
    setCurrentPage(1);
  };

  var startItem = (currentPage - 1) * pageSize + 1;
  var endItem = currentPage * pageSize;
  var total = dataSource === null || dataSource === void 0 ? void 0 : dataSource.length;
  return /*#__PURE__*/React.createElement(_style.default, null, /*#__PURE__*/React.createElement(_antd.Row, null, /*#__PURE__*/React.createElement(_antd.Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(_table.default, _extends({
    rowClassName: function rowClassName(record, index) {
      return index % 2 === 0 ? 'table-row-light' : 'table-row-dark';
    },
    dataSource: currentTableData,
    pagination: false,
    columns: withNumber ? [].concat(numberColumn, _toConsumableArray(columns)) : columns
  }, rest)))), /*#__PURE__*/React.createElement(_antd.Row, {
    justify: "end",
    align: "middle",
    className: "action-bottom"
  }, /*#__PURE__*/React.createElement(_antd.Col, {
    xl: {
      span: 6
    },
    lg: {
      span: 8
    },
    md: {
      span: 12
    }
  }, /*#__PURE__*/React.createElement(_antd.Row, {
    justify: "end",
    gutter: 24
  }, /*#__PURE__*/React.createElement(_antd.Col, null, "Baris per halaman"), /*#__PURE__*/React.createElement(_antd.Col, null, /*#__PURE__*/React.createElement(_antd.Select, {
    className: "select-size",
    defaultValue: pageSize,
    onChange: onSizeChange
  }, /*#__PURE__*/React.createElement(Option, {
    value: 5
  }, "5"), /*#__PURE__*/React.createElement(Option, {
    value: 10
  }, "10"), /*#__PURE__*/React.createElement(Option, {
    value: 20
  }, "20"))))), /*#__PURE__*/React.createElement(_antd.Col, {
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
  }, startItem, " - ", endItem, " dari ", total), /*#__PURE__*/React.createElement(_antd.Col, {
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
  }, /*#__PURE__*/React.createElement(_pagination.default, {
    className: "pagination-bar",
    currentPage: currentPage,
    totalCount: total || 0,
    pageSize: pageSize,
    onPageChange: function onPageChange(page) {
      return setCurrentPage(page);
    }
  }))));
};

TableLocal.propTypes = {
  orderingNumber: _propTypes.default.number,
  withNumber: _propTypes.default.bool
};
var _default = TableLocal;
exports.default = _default;
//# sourceMappingURL=index.js.map