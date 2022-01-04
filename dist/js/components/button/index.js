"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BaseButton = function BaseButton(props) {
  var color = props.color;
  return /*#__PURE__*/React.createElement(_style.default, _extends({
    color: color,
    "data-testid": "required-button"
  }, props));
};

var _default = BaseButton;
exports.default = _default;
//# sourceMappingURL=index.js.map