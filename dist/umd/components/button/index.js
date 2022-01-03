(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "./style"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("./style"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.style);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _style) {
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
  }

  const BaseButton = props => {
    const {
      color
    } = props;
    return /*#__PURE__*/_react2.default.createElement(_style2.default, _extends({
      color: color,
      "data-testid": "required-button"
    }, props));
  };

  BaseButton.propTypes = {
    color: _propTypes2.default.oneOf(['secondary', 'primary'])
  };
  exports.default = BaseButton;
});
//# sourceMappingURL=index.js.map