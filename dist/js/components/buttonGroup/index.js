"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var _style = _interopRequireDefault(require("./style"));

var _excluded = ["color", "groups"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ButtonGroup = function ButtonGroup(_ref) {
  var color = _ref.color,
      groups = _ref.groups,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(_style.default, {
    color: color
  }, /*#__PURE__*/React.createElement(_antd.Radio.Group, rest, groups.map(function (row) {
    return /*#__PURE__*/React.createElement(_antd.Radio.Button, {
      value: row.value
    }, row.label);
  })));
};

var _default = ButtonGroup;
exports.default = _default;
//# sourceMappingURL=index.js.map