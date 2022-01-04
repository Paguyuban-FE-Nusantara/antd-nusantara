(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "antd", "./style"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("antd"), require("./style"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.antd, global.style);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _antd, _style) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _style2 = _interopRequireDefault(_style);

  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

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

  ButtonGroup.propTypes = {
    groups: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
    })).isRequired
  };
  exports.default = ButtonGroup;
});
//# sourceMappingURL=index.js.map