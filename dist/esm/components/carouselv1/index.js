import _pt from "prop-types";
import { Carousel, Image, Typography, Space } from 'antd';
import * as React from 'react';
import CarouselV1Wrapper from './style';
const {
  Text,
  Title
} = Typography;

const CarouselV1 = ({
  slides
}) => {
  return /*#__PURE__*/React.createElement(CarouselV1Wrapper, null, /*#__PURE__*/React.createElement(Carousel, {
    autoplay: true
  }, slides.map((row, index) => /*#__PURE__*/React.createElement("div", {
    key: Number(index),
    className: "carousel-content"
  }, /*#__PURE__*/React.createElement(Image, {
    preview: false,
    src: row.image
  }), /*#__PURE__*/React.createElement(Space, {
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
  slides: _pt.arrayOf(_pt.shape({
    image: _pt.string.isRequired,
    title: _pt.string.isRequired,
    subtitle: _pt.string.isRequired
  })).isRequired
};
export default CarouselV1;
//# sourceMappingURL=index.js.map