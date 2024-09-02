import images from "../utils/importImages";
import { Overlay } from "react-bootstrap"; // 모달창 라이브러리
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { SlArrowRightCircle } from "react-icons/sl";

function InfoCard() {
  const coffeeCardsData = [
    {
      mainImage: images["coffee-main"],
      title: "COFFEE",
      subTitle: "무조건 커피 맛집으로",
      description: "커피에 진심이라면 꼭 가야 하는 곳",
      icon: <SlArrowRightCircle color="#ffffff" size="1.5rem" />,
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
      icon: <SlArrowRightCircle color="#ffffff" size="1.5rem" />, // 반대방향으로 !
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
      subTitle: "디저트가 바로 카페의 꽃이야",
      description: "카페에서 디저트가 중요한 당신이라면",
      icon: <SlArrowRightCircle color="#ffffff" size="1.5rem" />,
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

  return <></>;
}

export default InfoCard;
