(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "antd", "react", "./style"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("antd"), require("react"), require("./style"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.antd, global.react, global.style);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _antd, _react, _style) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _style2 = _interopRequireDefault(_style);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  } // @ts-ignore


  const BaseTable = props => {
    return /*#__PURE__*/_react2.default.createElement(_style2.default, null, /*#__PURE__*/_react2.default.createElement(_antd.Table, _extends({
      "data-testid": "table-com"
    }, props)));
  };

  BaseTable.propTypes = {
    height: _propTypes2.default.string
  };
  exports.default = BaseTable;
});
//# sourceMappingURL=index.js.map