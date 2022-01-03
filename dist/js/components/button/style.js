"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _antd = require("antd");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonWrapper = (0, _styledComponents.default)(_antd.Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (props) {
  switch (props.color) {
    case 'primary':
      return (
        /*css*/
        "\n            &.ant-btn-primary{\n                background-color:  ".concat(props.theme.palette.primary[1], ";\n                color: white;\n            }\n        ")
      );

    case 'secondary':
      return (
        /*css*/
        "\n            color: ".concat(props.theme.palette.primary[2], ";\n            border-color:  ").concat(props.theme.palette.primary[2], ";\n            &:hover{\n                border-color:  ").concat(props.theme.palette.primary[2], ";\n                color: ").concat(props.theme.palette.primary[2], ";\n            }\n            &.ant-btn-primary{\n                background-color:  ").concat(props.theme.palette.primary[2], ";\n                border-color:  ").concat(props.theme.palette.primary[2], ";\n                color: white;\n                &:hover {\n                    background-color:  ").concat(props.theme.palette.primary[1], ";\n                    border-color:  ").concat(props.theme.palette.primary[2], ";\n                }\n            }\n            &.ant-btn-text{\n              border-color: transparent;\n            }\n            &.ant-btn-link{\n              border-color: transparent;\n            }\n        ")
      );

    default:
      return "";
  }
});
var _default = ButtonWrapper;
exports.default = _default;
//# sourceMappingURL=style.js.map