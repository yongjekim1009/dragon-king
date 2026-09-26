// --- game 카테고리 ---
import lastThumb from "../assets/imeges/portfolio/game/last/last_survivor_thumb.webp";
import lastDetail from "../assets/imeges/portfolio/game/last/last_survivor_detail.webp";

import darkThumb from "../assets/imeges/portfolio/game/dark/dark_fall_thumb.webp";
import darkDetail from "../assets/imeges/portfolio/game/dark/dark_fall_detail.webp";

import chronicleThumb from "../assets/imeges/portfolio/game/chronicle/chronicle_thumb.webp";
import chronicleDetail from "../assets/imeges/portfolio/game/chronicle/chronicle_detail.webp";

import zeusThumb from "../assets/imeges/portfolio/game/zeus/zeus_thumb.webp";
import zeusDetailPc from "../assets/imeges/portfolio/game/zeus/zeus_detail_pc.webp";
import zeusDetailM from "../assets/imeges/portfolio/game/zeus/zeus_detail_m.webp";

// --- finance 카테고리 ---
import smartThumb from "../assets/imeges/portfolio/finance/smart-management/smart_management_thumb.webp";
import smartBanner01 from "../assets/imeges/portfolio/finance/smart-management/smart_management_banner01.webp";
import smartBanner02 from "../assets/imeges/portfolio/finance/smart-management/smart_management_banner02.webp";

import strategyThumb from "../assets/imeges/portfolio/finance/strategy/strategy_thumb.webp";
import strategyBanner from "../assets/imeges/portfolio/finance/strategy/strategy_banner.webp";

// --- beauty&health 카테고리 ---
import appleThumb from "../assets/imeges/portfolio/beauty&health/apple-pure/apple_pure_thumb.webp";
import appleDetail01 from "../assets/imeges/portfolio/beauty&health/apple-pure/apple_pure_detail01.webp";
import appleDetail02 from "../assets/imeges/portfolio/beauty&health/apple-pure/apple_pure_detail02.webp";
import appleDetail03 from "../assets/imeges/portfolio/beauty&health/apple-pure/apple_pure_detail03.webp";

import wildGinsengThumb from "../assets/imeges/portfolio/beauty&health/wild-ginseng/wild_ginseng_thumb.webp";
import wildGinsengDetail01 from "../assets/imeges/portfolio/beauty&health/wild-ginseng/wild_ginseng_detail01.webp";
import wildGinsengDetail02 from "../assets/imeges/portfolio/beauty&health/wild-ginseng/wild_ginseng_detail02.webp";
import wildGinsengDetail03 from "../assets/imeges/portfolio/beauty&health/wild-ginseng/wild_ginseng_detail03.webp";
import wildGinsengDetail04 from "../assets/imeges/portfolio/beauty&health/wild-ginseng/wild_ginseng_detail04.webp";

// --- food 카테고리 ---
import burgerThumb from "../assets/imeges/portfolio/food/burger/burger_thumb.webp";
import burgerBanner from "../assets/imeges/portfolio/food/burger/burger_banner.webp";

export const PORTFOLIO_ITEMS = [
  // --- game 카테고리 ---
  {
    id: 1001,
    category: "game",
    title: "라스트 서바이버 프로모션 페이지",
    description: "포스트 아포칼립스 세계관의 긴장감을\n시각적으로 담아낸 게임 프로모션 페이지입니다.",
    descriptionSub: "(해당 작업은 포트폴리오 목적으로 진행된 가상의 프로젝트입니다.)",
    thumbnail: lastThumb,
    detailImages: [lastDetail],
  },
  {
    id: 1002,
    category: "game",
    title: "다크 폴 프로모션 페이지",
    description: "다크 판타지 세계관의 강렬한 분위기를 담아낸\n게임 업데이트 프로모션 페이지입니다.",
    descriptionSub: "(해당 작업은 포트폴리오 목적으로 진행된 가상의 프로젝트입니다.)",
    thumbnail: darkThumb,
    detailImages: [darkDetail],
  },
  {
    id: 1003,
    category: "game",
    title: "크로니클 패스 오브 스타 프로모션 페이지",
    description: "별과 운명을 테마로 한\n판타지 RPG 이벤트 프로모션 페이지입니다.",
    descriptionSub: "(해당 작업은 포트폴리오 목적으로 진행된 가상의 프로젝트입니다.)",
    thumbnail: chronicleThumb,
    detailImages:  [chronicleDetail],
  },
  {
    id: 1004,
    category: "game",
    title: "제우스 프로모션 페이지",
    description: "MMORPG 제우스의 사전예약 프로모션 페이지입니다.",
    descriptionSub: "*본 프로젝트는\n포트폴리오 목적으로 진행된 비공식 리디자인 작업이며\n해당 브랜드의 공식 입장이나 디자인 방향성과는 무관합니다.",
    thumbnail: zeusThumb,
    detailImages:  [zeusDetailPc],
    mobileDetailImages: [zeusDetailM],
  },

  // --- finance 카테고리 ---
  {
    id: 2001,
    category: "finance",
    title: "스마트 관리 앱 배너",
    description: "광고 집행을 위한 배너 디자인입니다.",
    descriptionSub: "(해당 작업은 포트폴리오 목적으로 진행된 가상의 프로젝트입니다.)",
    thumbnail: smartThumb,
    detailImages: [smartBanner01],
    mobileDetailImages: [smartBanner02],
  },
  {
    id: 2002,
    category: "finance",
    title: "투자 전략 앱 배너",
    description: "광고 집행을 위한 배너 디자인입니다.",
    descriptionSub: "(해당 작업은 포트폴리오 목적으로 진행된 가상의 프로젝트입니다.)",
    thumbnail: strategyThumb,
    detailImages: [strategyBanner],
    detailSize: "small",
  },

  // --- beauty&health 카테고리 ---
  {
    id: 3001,
    category: "beauty&health",
    title: "애플 퓨어 샷 상세페이지",
    description: "구매 전환율을 높이기 위해\n제품의 특장점을 시각화하여 상세페이지입니다.",
    thumbnail: appleThumb,
    detailImages: [
      appleDetail01,
      appleDetail02,
      appleDetail03,
    ],
    detailSize: "small",
  },
  {
    id: 3002,
    category: "beauty&health",
    title: "산삼비책 와디즈 펀딩 상세페이지",
    description: "감성적인 스토리텔링이 담긴\n브랜드 상세페이지입니다.",
    thumbnail: wildGinsengThumb,
    detailImages: [
      wildGinsengDetail01,
      wildGinsengDetail02,
      wildGinsengDetail03,
      wildGinsengDetail04,
    ],
    detailSize: "small",
  },

    // --- food 카테고리 ---
  {
    id: 4001,
    category: "food",
    title: "육즙 가득 버거 배너",
    description: "광고 집행을 위한 배너 디자인입니다.",
    descriptionSub: "(해당 작업은 포트폴리오 목적으로 진행된 가상의 프로젝트입니다.)",
    thumbnail: burgerThumb,
    detailImages: [burgerBanner,],
    detailSize: "small",
  },
];


