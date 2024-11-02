import styled from "styled-components";
import images from "../utils/importImages";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ReviewWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 160px;
`;

const StyledCard = styled.div`
  /* width: 100%; */
  /* margin: 0 auto; */
  align-items: center;
  margin-left: 24px;
`;

const Title = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.span`
  color: #111111;
  font-size: 2rem;
  font-weight: bold;
`;

const SubTitle = styled.span`
  color: #111111;
  font-size: 2rem;
  font-weight: bold;
`;
const ReviewImagesWrapper = styled.div`
  width: 100%;
  height: 384px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const ReviewImage = styled.img`
  width: 280px;
  height: 280px;
`;

const DescriptionGroup = styled.div``;

const UserProfile = styled.img`
  width: 30px;
`;

const UserId = styled.span`
  color: #666666;
`;

const ReviewText = styled.span`
  color: #333333;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const SplitPart = styled.span``;

const HighlightedText = styled.span`
  color: #ff3232;
`;

function Review() {
  const reviewCards = [
    {
      reviewImage: images["review-1"],
      userID: "lee",
      userProfile: images["userID_profile_1"],
      review: "#모아모아 추천받고 갔는데 만족",
      likes: 233,
    },
    {
      reviewImage: images["review-2"],
      userID: "mia",
      userProfile: images["userID_profile_2"],
      review:
        "어디로 갈지 항상 망설였는데 #모아모아 이용목적에 맞게 분류잘되있음",
      likes: 412,
    },
    {
      reviewImage: images["review-3"],
      userID: "apple",
      userProfile: images["userID_profile_3"],
      review: "커피도 분위기도 미쳐버린 #모아모아 사랑해요",
      likes: 879,
    },
    {
      reviewImage: images["review-4"],
      userID: "happy",
      userProfile: images["userID_profile_4"],
      review: "#모아모아 아니였으면 동네에 이런 카페있는지 계속 몰랐을듯",
      likes: 542,
    },
  ];

  const [likedCards, setLikedCards] = useState("");
  return (
    <Container>
      <ReviewWrapper>
        <Title>
          <TitleText>전국 모아인들의</TitleText>
          <SubTitle>카페 인증 LIVE</SubTitle>
        </Title>
        <ReviewImagesWrapper>
          {reviewCards.map((card, idx) => (
            <StyledCard key={idx}>
              <ReviewImage src={card.reviewImage} alt={"review"} />
              <DescriptionGroup>
                <UserProfile src={card.userProfile} alt={"userProfile"} />
                <UserId>{card.userID}</UserId>
                <ReviewText>
                  {card.review.split("#모아모아").map((part, idx) => (
                    <SplitPart key={idx}>
                      {part}
                      {idx < card.review.split("#모아모아").length - 1 && (
                        <HighlightedText>#모아모아</HighlightedText>
                      )}
                    </SplitPart>
                  ))}
                </ReviewText>
              </DescriptionGroup>
            </StyledCard>
          ))}
        </ReviewImagesWrapper>
      </ReviewWrapper>
    </Container>
  );
}

export default Review;
