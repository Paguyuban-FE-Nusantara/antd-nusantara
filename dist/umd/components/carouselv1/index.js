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

  const {
    Text,
    Title
  } = _antd.Typography;

  const CarouselV1 = ({
    slides
  }) => {
    return /*#__PURE__*/React.createElement(_style2.default, null, /*#__PURE__*/React.createElement(_antd.Carousel, {
      autoplay: true
    }, slides.map((row, index) => /*#__PURE__*/React.createElement("div", {
      key: Number(index),
      className: "carousel-content"
    }, /*#__PURE__*/React.createElement(_antd.Image, {
      preview: false,
      src: row.image
    }), /*#__PURE__*/React.createElement(_antd.Space, {
      direction: "vertical",
      size: "small",
      wrap: true
    }, /*#__PURE__*/React.createElement(Title, {
      level: 4
    }, row.title), /*#__PURE__*/React.createElement(Text, {
      type: "secondary"
    }, row.subtitle))))));
  };

  CarouselV1.propTypes = {
    slides: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      image: _propTypes2.default.string.isRequired,
      title: _propTypes2.default.string.isRequired,
      subtitle: _propTypes2.default.string.isRequired
    })).isRequired
  };
  exports.default = CarouselV1;
});
//# sourceMappingURL=index.js.map