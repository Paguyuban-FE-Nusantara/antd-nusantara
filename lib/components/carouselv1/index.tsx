import { Carousel, Image, Typography, Space } from 'antd';
import * as React from 'react';
import CarouselV1Wrapper from './style';
import * as React from "react"

export interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

type Slides = Slide[];
interface ICarouselV1Props {
  slides: Slides;
}

const { Text, Title } = Typography;

const CarouselV1: React.FunctionComponent<ICarouselV1Props> = ({ slides }) => {
  return (
    <CarouselV1Wrapper>
      <Carousel autoplay>
        {slides.map((row, index) => (
          <div key={Number(index)} className="carousel-content">
            <Image preview={false} src={row.image} />
            <Space direction="vertical" size="small" wrap>
              <Title level={4}>{row.title}</Title>
              <Text type="secondary">{row.subtitle}</Text>
            </Space>
          </div>
        ))}
      </Carousel>
    </CarouselV1Wrapper>
  );
};

export default CarouselV1;
