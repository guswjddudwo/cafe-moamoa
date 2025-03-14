import styled from "styled-components";
import images from "../utils/importImages";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbArrowNarrowRight } from "react-icons/tb";
import Slider from "../components/Slider";
import InfoCard from "./InfoCard";
import Review from "./Review";
import Footer from "../components/Footer";

const MainWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  margin-top: 140px;
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto 60px;
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
  margin-left: 80px;
  margin-bottom: 20px;
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
  width: 100%;
  max-width: 1192px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 381px;
  height: 282px;
  transition: transform 0.3s ease;
  &:nth-child(2) {
    margin: 0 24px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
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
            <TbArrowNarrowRight
              color="#111111"
              size="2rem"
              style={{ cursor: "pointer", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5d5d5d")}
            />
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
      <InfoCard />
      <Review />
      <Footer />
    </MainWrapper>
  );
}

export default Main;
