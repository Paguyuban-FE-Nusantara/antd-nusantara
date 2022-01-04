(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "styled-components"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("styled-components"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents);
    global.undefined = mod.exports;
  }
})(this, function (exports, _styledComponents) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const ButtonGroupWrapper = _styledComponents2.default.div`
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: ${({
    color,
    theme
  }) => color === 'secondary' ? theme.palette.primary[2] : '#101C42'};
    background: #fff;
    border-color: ${({
    color,
    theme
  }) => color === 'secondary' ? theme.palette.primary[2] : '#101C42'};
    &:before {
      background-color: ${({
    color,
    theme
  }) => color === 'secondary' ? theme.palette.primary[2] : '#101C42'};
    }
  }
`;
  exports.default = ButtonGroupWrapper;
});
//# sourceMappingURL=style.js.map