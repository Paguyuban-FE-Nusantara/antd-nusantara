(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "styled-components", "antd"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("styled-components"), require("antd"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents, global.antd);
    global.undefined = mod.exports;
  }
})(this, function (exports, _styledComponents, _antd) {
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

  const ButtonWrapper = (0, _styledComponents2.default)(_antd.Button)`
  ${props => {
    switch (props.color) {
      case 'primary':
        return (
          /*css*/
          `
            &.ant-btn-primary{
                background-color:  ${props.theme.palette.primary[1]};
                color: white;
            }
        `
        );

      case 'secondary':
        return (
          /*css*/
          `
            color: ${props.theme.palette.primary[2]};
            border-color:  ${props.theme.palette.primary[2]};
            &:hover{
                border-color:  ${props.theme.palette.primary[2]};
                color: ${props.theme.palette.primary[2]};
            }
            &.ant-btn-primary{
                background-color:  ${props.theme.palette.primary[2]};
                border-color:  ${props.theme.palette.primary[2]};
                color: white;
                &:hover {
                    background-color:  ${props.theme.palette.primary[1]};
                    border-color:  ${props.theme.palette.primary[2]};
                }
            }
            &.ant-btn-text{
              border-color: transparent;
            }
            &.ant-btn-link{
              border-color: transparent;
            }
        `
        );

      default:
        return ``;
    }
  }}
`;
  exports.default = ButtonWrapper;
});
//# sourceMappingURL=style.js.map