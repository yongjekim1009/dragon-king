export type PortfolioCategory =
  | "game"
  | "finance"
  | "beauty&health"
  | "food";

export const PORTFOLIO_CATEGORY_LABELS: Record<
  PortfolioCategory,
  string
> = {
  game: "게임",
  finance: "금융",
  "beauty&health": "뷰티·건강",
  food: "식품",
};