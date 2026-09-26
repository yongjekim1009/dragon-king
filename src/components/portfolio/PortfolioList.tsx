import styles from "./PortfolioList.module.css";
import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PortfolioCard from "./PortfolioCard";
import CategoryButton from "../common/category/CategoryButton";
import { PORTFOLIO_ITEMS } from "../../data/portfolioData";
import type { PortfolioCategory } from "../../types/portfoiloType";

type CategoryType = PortfolioCategory;

interface PortfolioListProps {
  limit?: number;
  showMoreButton?: boolean;
}

export default function PortfolioList({
  limit,
  showMoreButton = false,
}: PortfolioListProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    (location.state?.category as CategoryType) || "game"
  );

  // 선택된 카테고리 필터링 및 최신순 정렬
  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS
      .filter((item) => item.category === selectedCategory)
      .sort((a, b) => b.id - a.id);
  }, [selectedCategory]);

  // limit이 주어지면 해당 개수만큼만 자름
  const displayItems = useMemo(() => {
    return limit ? filteredItems.slice(0, limit) : filteredItems;
  }, [filteredItems, limit]);

  return (
    <div className={styles["portfolio-list-wrapper"]}>
      <CategoryButton
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className={styles["portfolio-grid-container"]}>
        {displayItems.map((item) => (
          <PortfolioCard
            key={item.id}
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            category={selectedCategory}
          />
        ))}
      </div>

      {/* 메인 페이지 전용: 전체보기 버튼 */}
      {showMoreButton && (
        <div className={styles["portfolio-more-container"]}>
          <button
            type="button"
            className={styles["portfolio-more-btn"]}
            onClick={() =>
              navigate("/portfolio", {
                state: { category: selectedCategory },
              })
            }
          >
            전체보기
          </button>
        </div>
      )}
    </div>
  );
}