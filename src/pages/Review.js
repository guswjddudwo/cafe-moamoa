import styled from "styled-components";
import images from "../utils/importImages";

const Img = styled.img`
  width: 280px;
  height: 280px;
`;

function Review() {
  return (
    <>
      <div>
        <div>
          <span>전국 모아인들의 생생 LIVE</span>
        </div>
        <div>
          <Img src={images["review-1"]} />
          <Img src={images["review-2"]} />
          <Img src={images["review-3"]} />
          <Img src={images["review-4"]} />
        </div>
      </div>
      <div>
        <span>
          CAFE MOAMOA에서 추천받은 카페 방문하고 인스타에 #모아모아 태그하면
          추첨을 통해 선물을 드려요!
        </span>
      </div>
    </>
  );
}

export default Review;
