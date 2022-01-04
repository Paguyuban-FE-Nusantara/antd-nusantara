"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = _antd.Typography.Text,
    Title = _antd.Typography.Title;

var CarouselV1 = function CarouselV1(_ref) {
  var slides = _ref.slides;
  return /*#__PURE__*/React.createElement(_style.default, null, /*#__PURE__*/React.createElement(_antd.Carousel, {
    autoplay: true
  }, slides.map(function (row, index) {
    return /*#__PURE__*/React.createElement("div", {
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
    }, row.subtitle)));
  })));
};

CarouselV1.propTypes = {
  slides: _propTypes.default.arrayOf(_propTypes.default.shape({
    image: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    subtitle: _propTypes.default.string.isRequired
  })).isRequired
};
var _default = CarouselV1;
exports.default = _default;
//# sourceMappingURL=index.js.map