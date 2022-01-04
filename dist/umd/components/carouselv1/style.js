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

  const CarouselV1Wrapper = _styledComponents2.default.div`
  width: 100%;
  position: relative;
  .carousel-content {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .slick-dots {
    position: relative;
    bottom: -10px;
    li {
      button {
        border-radius: 100%;
        width: 10px;
        height: 10px;
        background: ${props => props.theme.palette.primary[3]};
      }
      &.slick-active {
        button {
          background: ${props => props.theme.palette.primary[2]};
        }
      }
    }
  }

  .ant-space {
    padding: 0 6em;
  }

  @media only screen and (max-width: 767px) {
    /* flex-direction: column-reverse; */
  }
`;
  exports.default = CarouselV1Wrapper;
});
//# sourceMappingURL=style.js.map