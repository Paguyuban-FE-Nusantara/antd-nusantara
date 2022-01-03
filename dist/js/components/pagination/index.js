"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasePagination = function BasePagination(props) {
  var onPageChange = props.onPageChange,
      currentPage = props.currentPage,
      pageSize = props.pageSize,
      totalCount = props.totalCount,
      className = props.className;

  if (currentPage === 0) {
    return null;
  }

  var lastPage = Math.ceil(totalCount / pageSize);

  var onNext = function onNext() {
    onPageChange(currentPage + 1);
  };

  var onPrevious = function onPrevious() {
    onPageChange(currentPage - 1);
  };

  var onFirst = function onFirst() {
    onPageChange(1);
  };

  var onLast = function onLast() {
    onPageChange(lastPage);
  };

  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: className
  }, /*#__PURE__*/_react.default.createElement(_antd.Row, {
    justify: "end",
    gutter: 8
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "text",
    shape: "circle",
    icon: /*#__PURE__*/_react.default.createElement(_icons.DoubleLeftOutlined, null),
    onClick: onFirst,
    disabled: currentPage === 1 || totalCount === 0
  })), /*#__PURE__*/_react.default.createElement(_antd.Col, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "text",
    shape: "circle",
    icon: /*#__PURE__*/_react.default.createElement(_icons.LeftOutlined, null),
    onClick: onPrevious,
    disabled: currentPage === 1 || totalCount === 0
  })), /*#__PURE__*/_react.default.createElement(_antd.Col, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "text",
    shape: "circle",
    icon: /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, null),
    onClick: onNext,
    disabled: currentPage === lastPage || totalCount === 0
  })), /*#__PURE__*/_react.default.createElement(_antd.Col, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "text",
    shape: "circle",
    icon: /*#__PURE__*/_react.default.createElement(_icons.DoubleRightOutlined, null),
    onClick: onLast,
    disabled: currentPage === lastPage || totalCount === 0
  }))));
};

BasePagination.propTypes = {
  currentPage: _propTypes.default.number.isRequired,
  pageSize: _propTypes.default.number.isRequired,
  totalCount: _propTypes.default.number.isRequired,
  className: _propTypes.default.string
};
var _default = BasePagination;
exports.default = _default;
//# sourceMappingURL=index.js.map