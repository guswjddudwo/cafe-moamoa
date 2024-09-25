import styled from "styled-components";
import images from "../utils/importImages";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ReviewWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
`;

const ReviewText = styled.div`
  /* width: 50%; */
  margin: 0;
`;

const TitleText = styled.span`
  color: #111111;
  font-size: 2rem;
  text-align: left;
`;

const ReviewImagesWrapper = styled.div`
  width: 100%;
`;
const Img = styled.img`
  width: 280px;
  height: 280px;
  margin-left: 24px;
`;

function Review() {
  return (
    <Container>
      <ReviewWrapper>
        <ReviewText>
          <TitleText>전국 모아인들의 생생 LIVE</TitleText>
          <span></span>
        </ReviewText>
        <ReviewImagesWrapper>
          <Img src={images["review-1"]} />
          <Img src={images["review-2"]} />
          <Img src={images["review-3"]} />
          <Img src={images["review-4"]} />
        </ReviewImagesWrapper>
      </ReviewWrapper>
    </Container>
  );
}

export default Review;
