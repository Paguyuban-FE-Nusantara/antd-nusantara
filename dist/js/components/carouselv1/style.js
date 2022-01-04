"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CarouselV1Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  .carousel-content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n  .slick-dots {\n    position: relative;\n    bottom: -10px;\n    li {\n      button {\n        border-radius: 100%;\n        width: 10px;\n        height: 10px;\n        background: ", ";\n      }\n      &.slick-active {\n        button {\n          background: ", ";\n        }\n      }\n    }\n  }\n\n  .ant-space {\n    padding: 0 6em;\n  }\n\n  @media only screen and (max-width: 767px) {\n    /* flex-direction: column-reverse; */\n  }\n"])), function (props) {
  return props.theme.palette.primary[3];
}, function (props) {
  return props.theme.palette.primary[2];
});

var _default = CarouselV1Wrapper;
exports.default = _default;
//# sourceMappingURL=style.js.map