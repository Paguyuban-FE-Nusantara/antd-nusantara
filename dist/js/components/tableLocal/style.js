"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TableWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .ant-table-thead > tr > th {\n    background: ", ";\n  }\n  .action-bottom {\n    line-height: 30px;\n  }\n  .table-row-light {\n    background-color: ", ";\n  }\n  .table-row-dark {\n    background-color: ", ";\n  }\n  .select-size {\n    .ant-select-selector {\n      border-color: transparent;\n    }\n  }\n  .action-bottom {\n    margin-top: 1rem;\n  }\n"])), function (props) {
  return props.theme.palette.grayscale[8];
}, function (props) {
  return props.theme.palette.grayscale[9];
}, function (props) {
  return props.theme.palette.grayscale[8];
});

var _default = TableWrapper;
exports.default = _default;
//# sourceMappingURL=style.js.map