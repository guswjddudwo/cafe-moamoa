import styled from "styled-components";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import images from "../utils/importImages";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbArrowNarrowRight } from "react-icons/tb";
import { Overlay } from "react-bootstrap"; // 모달창 라이브러리
import Slider from "../components/Slider";

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  position: relative;
  margin: 0 auto;
  margin-top: 140px;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const LocationText = styled.span`
  color: #ff3232;
  font-size: 3rem;
  font-weight: bold;
`;

const HeaderText = styled.div`
  /* width: auto; */
  margin-left: 80px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
const SurroundingText = styled.div`
  font-size: 3rem;
  color: #111111;
`;

const DescriptionGroup = styled.div`
  display: flex;
  margin-left: 80px;
  align-items: end;
  width: 100%;
  justify-content: space-between;
`;
const DescriptionText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #111111;
`;

const ViewAllButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 150px;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: #111111;
  cursor: pointer;
  &:hover {
    color: #5d5d5d;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 381px;
  height: 282px;
  margin-left: 24px;
  transition: transform 0.3s ease;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  color: #ffff;
  font-size: 1.3rem;
  font-weight: bold;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
function Main(props) {
  return (
    <MainWrapper>
      <ContentWrapper>
        <HeaderText>
          <FaMapMarkerAlt color="#FF3232" size="2.3rem" />
          <LocationText>성수동</LocationText> {/* 위치 받아오기 */}
          <SurroundingText>주변</SurroundingText>
        </HeaderText>

        <DescriptionGroup>
          <DescriptionText>커피 맛집을 모아모아.</DescriptionText>
          <ViewAllButton>
            전체보기
            <TbArrowNarrowRight color="#111111" size="2rem" />
          </ViewAllButton>
        </DescriptionGroup>
      </ContentWrapper>

      {/* 메인 이미지 섹션 */}
      <ImageWrapper>
        <ImageContainer>
          <StyledImage src={images["main-1"]} alt="커피 맛집" />
          <OverlayText>#커피맛집</OverlayText>
        </ImageContainer>

        <ImageContainer>
          <StyledImage src={images["main-2"]} alt="뷰 맛집" />
          <OverlayText>#뷰 맛집</OverlayText>
        </ImageContainer>

        <ImageContainer>
          <StyledImage src={images["main-3"]} alt="디저트 맛집" />
          <OverlayText>#디저트 맛집</OverlayText>
        </ImageContainer>
      </ImageWrapper>
      <Slider />

      {/* 몸통 */}
      <section></section>
    </MainWrapper>
  );
}

export default Main;
