(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "antd", "./style"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("antd"), require("./style"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.antd, global.style);
    global.undefined = mod.exports;
  }
})(this, function (exports, _antd, _style) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _style2 = _interopRequireDefault(_style);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const _excluded = ["color", "groups"];

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  const ButtonGroup = _ref => {
    let {
      color,
      groups
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/React.createElement(_style2.default, {
      color: color
    }, /*#__PURE__*/React.createElement(_antd.Radio.Group, rest, groups.map(row => /*#__PURE__*/React.createElement(_antd.Radio.Button, {
      value: row.value
    }, row.label))));
  };

  exports.default = ButtonGroup;
});
//# sourceMappingURL=index.js.map