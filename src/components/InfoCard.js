import images from "../utils/importImages";
import { Card, Overlay } from "react-bootstrap"; // 모달창 라이브러리
import styled from "styled-components";
import { SlArrowRightCircle } from "react-icons/sl";

const Container = styled.div`
  width: 100%;
  /* max-width: 1920px; // 필요 없음 자식컨텐츠를 넣을때 씀 */
  margin: 0 auto;
  margin-top: 160px;
`;

const StyledCard = styled.div`
  width: 100%;
  /* background-color: aqua; */
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
`;

const MainImage = styled.img`
  width: 830px;
  height: 880px;
`;

const DetailsWrapper = styled.div`
  position: relative;
`;

const DescriptionGroup = styled.ul`
  position: absolute;
  bottom: 2px;
  left: 70px;
  color: #ffffff;
  list-style: none;
  text-align: left;
`;

const Title = styled.li`
  display: inline-block;
  padding: 5px 7px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
`;

const SubTitle = styled.li`
  font-size: 2.3rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.li`
  font-size: 1.2rem;
  color: #ffff;
`;

const IconWrapper = styled.div`
  width: 15%;
  display: flex;
  margin-right: ${({ reverse }) => (reverse ? "auto" : "-300px")};
  margin-left: ${({ reverse }) => (reverse ? "580px" : "auto")};
  justify-content: ${({ reverse }) => (reverse ? "flex-start" : "flex-end")};
  transform: translateY(-140%);
`;

const SmallImageWrapper = styled.div`
  width: 50%;
  position: relative;
  margin: 0 auto;
`;

const Test = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
`;

const SmallImageGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SmallImage = styled.img`
  width: 260px;
`;

const SmallImageText = styled.span`
  margin-top: 16px;
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
`;

function InfoCard() {
  const coffeeCardsData = [
    {
      mainImage: images["coffee-main"],
      title: "COFFEE",
      subTitle: "무조건 커피 맛집으로",
      description: "커피에 진심이라면 꼭 가야 하는 곳",
      reverse: false,
      smallImages: [
        { image: images["coffee-taste-1"], text: "치즈 향내가 풍기는 커피" },
        { image: images["coffee-taste-2"], text: "이국적인 에스프레소 맛집" },
        {
          image: images["coffee-taste-3"],
          text: "브루잉을 직접 볼 수 있는 곳",
        },
        { image: images["coffee-taste-4"], text: "라떼 참 잘하는 집" },
      ],
    },
    {
      mainImage: images["view-main"],
      title: "VIEW",
      subTitle: "뷰가 좋아야 커피도 맛있다",
      description: "인생샷을 건지고 싶은 당신에게",
      reverse: true,
      smallImages: [
        { image: images["view-group-1"], text: "LP를 들으면서 분위기 즐기기" },
        { image: images["view-group-2"], text: "미국 농장에 온 것 같은 카페" },
        { image: images["view-group-3"], text: "빈티지 감성의 카페" },
        { image: images["view-group-4"], text: "성수 안에 작은 시골 풍경" },
      ],
    },
    {
      mainImage: images["dessert-main"],
      title: "DESSERT",
      subTitle: "카페의 꽃은 디저트",
      description: "카페에서 디저트가 중요한 당신이라면",
      reverse: false,
      smallImages: [
        {
          image: images["dessert-1"],
          text: "귀엽고 달콤한 곰돌이 디저트 카페",
        },
        { image: images["dessert-2"], text: "딸기러버들 환장하는 디저트집" },
        { image: images["dessert-3"], text: "당충전 200% 가능한 곳" },
        { image: images["dessert-4"], text: "쌀케이크 디저트 맛집" },
      ],
    },
  ];

  return (
    <Container>
      {coffeeCardsData.map((card, index) => (
        <StyledCard key={index} reverse={card.reverse}>
          <DetailsWrapper reverse={card.reverse}>
            <MainImage src={card.mainImage} alt={card.title} />
            <DescriptionGroup>
              <Title>{card.title}</Title>
              <SubTitle>{card.subTitle}</SubTitle>
              <Description>{card.description}</Description>
              <IconWrapper reverse={card.reverse}>
                <SlArrowRightCircle
                  size="3rem"
                  style={{ cursor: "pointer", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E5E5E5")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                />
              </IconWrapper>
            </DescriptionGroup>
          </DetailsWrapper>

          <SmallImageWrapper>
            <Test>
              {card.smallImages.map((smallImage, index) => (
                <SmallImageGrid key={index}>
                  <SmallImage src={smallImage.image} alt={smallImage.text} />
                  <SmallImageText>{smallImage.text}</SmallImageText>
                </SmallImageGrid>
              ))}
            </Test>
          </SmallImageWrapper>
        </StyledCard>
      ))}
    </Container>
  );
}
export default InfoCard;
