import * as React from 'react';
export interface Slide {
    image: string;
    title: string;
    subtitle: string;
}
declare type Slides = Slide[];
interface ICarouselV1Props {
    slides: Slides;
}
declare const CarouselV1: React.FunctionComponent<ICarouselV1Props>;
export default CarouselV1;
