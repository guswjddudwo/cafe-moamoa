import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import images from "../utils/importImages";

const SwiperWrapper = styled.div`
  width: 100%;
  max-width: 1192px;
  height: 260px;
  margin: 24px auto 0;
  background-color: #fff4f2;

  /* pagination 스타일링 */
  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    background-color: #ff3232;
  }

  .swiper-pagination-bullet-active {
    background-color: #ff3232;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 216px;
  margin-top: 1.5%;
  margin-right: 5%;
`;

const SlideTextWrapper = styled.div`
  margin-top: 7%;
  margin-left: 5%;
  display: flex;
  align-items: start;
  flex-direction: column;
  transition: transform 0.8s ease;
`;

const SlideEvent = styled.span`
  color: #ff3232;
  font-weight: bold;
  padding-bottom: 14px;
`;

const SlideDescription = styled.span`
  color: #111111;
  font-weight: bold;
  font-size: 1.5rem;
  padding-bottom: 14px;
`;

const SlideMore = styled.a`
  color: #666666;
  &:hover {
    color: #111111;
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Slider = () => {
  return (
    <SwiperWrapper>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={850}
      >
        <StyledSwiperSlide>
          <SlideTextWrapper>
            <SlideEvent>EVENT</SlideEvent>
            <SlideDescription>
              뜨개카페 in 성수 오픈 기념 20% 할인
            </SlideDescription>
            <SlideMore>자세히보기</SlideMore>
          </SlideTextWrapper>
          <Img src={images["main-slide1"]} alt="" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <SlideTextWrapper>
            <SlideEvent>EVENT</SlideEvent>
            <SlideDescription>
              뜨개카페 in 성수 오픈 기념 20% 할인
            </SlideDescription>
            <SlideMore>자세히보기</SlideMore>
          </SlideTextWrapper>
          <Img src={images["main-slide2"]} alt="" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <SlideTextWrapper>
            <SlideEvent>EVENT</SlideEvent>
            <SlideDescription>
              뜨개카페 in 성수 오픈 기념 20% 할인
            </SlideDescription>
            <SlideMore>자세히보기</SlideMore>
          </SlideTextWrapper>
          <Img src={images["main-slide3"]} alt="" />
        </StyledSwiperSlide>
      </Swiper>
    </SwiperWrapper>
  );
};
export default Slider;
