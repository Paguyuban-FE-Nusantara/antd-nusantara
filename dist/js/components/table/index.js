"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BaseTable = function BaseTable(props) {
  return /*#__PURE__*/_react.default.createElement(_style.default, null, /*#__PURE__*/_react.default.createElement(_antd.Table, _extends({
    "data-testid": "table-com"
  }, props)));
};

BaseTable.propTypes = {
  height: _propTypes.default.string
};
var _default = BaseTable;
exports.default = _default;
//# sourceMappingURL=index.js.map