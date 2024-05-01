import styled from "styled-Components";
// import HeaderImg from "../../assets/images/header.png";

export const Dot = styled.div`
  width: 7px;
  height: 7px;
  background-color: #333;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
`;

export const SliderContainer = styled.div`
  .slick-arrow.slick-next,
  .slick-arrow.slick-prev {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0.8;
    height: 30px;
    width: 30px;
    background: transparent;
    color: #333;
    z-index: 2;
  }

  .slick-arrow.slick-next {
    right: 5%;
  }
  .slick-arrow.slick-prev {
    left: 5%;
  }

  .slick-arrow.slick-next:hover,
  .slick-arrow.slick-prev:hover {
    opacity: 1;
    color: #444;
  }

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }

  .arrows {
    height: 30px;
    width: 30px;
    margin: 1px;
  }

  .slick-active .dot {
    width: 25px;
    border-radius: 6px;
    background: #cc9c51;
  }
`;

export const Title = styled.header`
  background-size: cover;
  background-position: center center;
  height: 70svh;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20%;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;

export const Heading1 = styled.h2`
  margin: 0;
  font-size: 2.7rem;
  font-weight: bold;
`;

export const Heading2 = styled.h3`
  margin: 0;
  font-size: 2rem;
  color: #fff;
  background-color: #cc9c51;
  padding: 0.25rem 0.5rem;
`;
