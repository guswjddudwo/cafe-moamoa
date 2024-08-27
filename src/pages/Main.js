import styled from "styled-components";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import images from "../utils/importImages";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbArrowNarrowRight } from "react-icons/tb";
import { Overlay } from "react-bootstrap";

// main에 필요한것들 : 슬라이드/사진들/
const MainWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  position: relative;
  margin: 0 auto;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LocationText = styled.span`
  color: #ff3232;
  font-size: 3rem;
  font-weight: bold;
`;

const HeaderText = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const DescriptionText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const ViewAllButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 1rem;
  cursor: pointer;
`;
const ImageWrapper = styled.div`
  /* margin-top: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainLeft = styled.img`
  width: 381px;
  height: 282px;
`;
const MainCenter = styled.img`
  width: 381px;
  height: 282px;
`;
const MainRight = styled.img`
  width: 381px;
  height: 282px;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  color: #ffff;
  font-size: 24px;
  font-weight: bold;
`;
function Main(props) {
  return (
    <MainWrapper>
      {/* <ContentWrapper>
        <FaMapMarkerAlt color="#FF3232" size="2.5rem" />
        <LocationText>성수동 </LocationText> 동적 작업해주기
        <span>주변</span>
        <span>커피맛집을 모아모아</span>
        <span>전체보기</span>
        <TbArrowNarrowRight />
      </ContentWrapper> */}

      <ContentWrapper>
        <HeaderText>
          <FaMapMarkerAlt color="#FF3232" size="2rem" />
          <LocationText>성수동</LocationText>
          주변
        </HeaderText>
        <DescriptionText>커피 맛집을 모아모아</DescriptionText>
        <ViewAllButton>
          전체보기 <TbArrowNarrowRight style={{ marginLeft: "0.5rem" }} />
        </ViewAllButton>
      </ContentWrapper>

      {/* 메인 이미지 섹션 */}
      <ImageWrapper>
        <MainLeft src={images["main-1"]} />
        <OverlayText>#커피맛집</OverlayText>

        <MainCenter src={images["main-2"]} />
        <OverlayText>#뷰 맛집</OverlayText>

        <MainRight src={images["main-3"]} />
        <OverlayText>#디저트 맛집</OverlayText>
      </ImageWrapper>

      {/*  배너 슬라이드 */}
      <section></section>
    </MainWrapper>
  );
}

export default Main;
