import styled from 'styled-components';

const CarouselV1Wrapper = styled.div`
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
        background: ${(props) => props.theme.palette.primary[3]};
      }
      &.slick-active {
        button {
          background: ${(props) => props.theme.palette.primary[2]};
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

export default CarouselV1Wrapper;
