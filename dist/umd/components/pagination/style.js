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

  const PaginationWrapper = _styledComponents2.default.div`
  button {
    background-color: ${props => props.theme.palette.grayscale[8]};
  }
  .ant-btn-icon-only > * {
    font-size: 14px;
  }
`;
  exports.default = PaginationWrapper;
});
//# sourceMappingURL=style.js.map