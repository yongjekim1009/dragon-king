import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./SearchResult.module.css";

import SearchBar from "../../components/common/search-bar/SearchBar";
import PortfolioCard from "../../components/portfolio/PortfolioCard";
import { Button } from "../../components/common/button/Button";
import BasicSpacer from "../../components/common/spacer/BasicSpacer";

import { PORTFOLIO_ITEMS } from "../../data/portfolioData";
import type { PortfolioCategory } from "../../types/portfoiloType";

type SearchCategory = "all" | PortfolioCategory;

const CATEGORY_LABELS: Record<SearchCategory, string> = {
  all: "전체",
  game: "게임",
  finance: "금융",
  "beauty&health": "뷰티·헬스",
  food: "식품",
};

const CATEGORIES: SearchCategory[] = [
  "all",
  "game",
  "finance",
  "beauty&health",
  "food",
];

export default function SearchResult() {
  // URL 검색어 가져오기
  // 예: /search?q=배너
  const [searchParams] = useSearchParams();

  const searchKeyword = searchParams.get("q") ?? "";

  // 사용자가 선택한 카테고리
  const [selectedCategory, setSelectedCategory] =
    useState<SearchCategory>("all");

  // 검색어에 해당하는 전체 결과
  const searchedItems = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();

    if (!keyword) {
      return [];
    }

    return PORTFOLIO_ITEMS
      .filter((item) => {
        const title = item.title.toLowerCase();
        const description =
          item.description?.toLowerCase() ?? "";

        return (
          title.includes(keyword) ||
          description.includes(keyword)
        );
      })
      .sort((a, b) => b.id - a.id);
  }, [searchKeyword]);

  /*
   * 현재 선택된 카테고리가
   * 새로운 검색 결과에도 존재하는지 확인
   *
   * 예:
   * "배너" 검색 → game 선택
   * "상세" 검색 → game 결과 없음
   * → 자동으로 all 처리
   */
  const activeCategory = useMemo<SearchCategory>(() => {
    if (selectedCategory === "all") {
      return "all";
    }

    const hasSelectedCategory = searchedItems.some(
      (item) => item.category === selectedCategory
    );

    return hasSelectedCategory
      ? selectedCategory
      : "all";
  }, [searchedItems, selectedCategory]);

  // 카테고리까지 적용한 최종 검색 결과
  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return searchedItems;
    }

    return searchedItems.filter(
      (item) => item.category === activeCategory
    );
  }, [searchedItems, activeCategory]);

  // 카테고리별 검색 결과 개수
  const categoryCount = useMemo(() => {
    return searchedItems.reduce(
      (acc, item) => {
        const category =
          item.category as PortfolioCategory;

        acc[category] =
          (acc[category] || 0) + 1;

        return acc;
      },
      {} as Partial<
        Record<PortfolioCategory, number>
      >
    );
  }, [searchedItems]);

  // 카테고리별 결과 개수
  const getCategoryCount = (
    category: SearchCategory
  ) => {
    if (category === "all") {
      return searchedItems.length;
    }

    return categoryCount[category] ?? 0;
  };

  return (
    <main className={styles["search-page"]}>
      
      <BasicSpacer />

      {/* 검색창 */}
      <SearchBar />

      {/* 검색어가 없는 경우 */}
      {!searchKeyword && (
        <div className={styles["search-empty"]}>
          <p>검색어를 입력해주세요.</p>
        </div>
      )}

      {/* 검색어가 있는 경우 */}
      {searchKeyword && (
        <>
          {/* 검색 결과 정보 */}
          <div
            className={
              styles["search-result-info"]
            }
          >
            <p>
              <strong>
                "{searchKeyword}"
              </strong>
              에 대한 검색 결과
            </p>

            <p>
              총{" "}
              <strong>
                {searchedItems.length}
              </strong>
              개의 작업물이 있습니다.
            </p>
          </div>

          {/* 카테고리 버튼 */}
          <div
            className={
              styles["category-container"]
            }
          >
            {CATEGORIES.map((category) => {
              const count =
                getCategoryCount(category);

              // 검색 결과가 없는 카테고리는 숨김
              // 전체 버튼은 항상 표시
              if (
                category !== "all" &&
                count === 0
              ) {
                return null;
              }

              return (
                <Button
                  key={category}
                  type="button"
                  variant={
                    activeCategory === category
                      ? "active-btn"
                      : "disabled-btn"
                  }
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                >
                  {CATEGORY_LABELS[category]}{" "}
                  {count}
                </Button>
              );
            })}
          </div>

          {/* 검색 결과 */}
          {filteredItems.length > 0 ? (
            <div
              className={
                styles[
                  "portfolio-grid-container"
                ]
              }
            >
              {filteredItems.map((item) => (
                <PortfolioCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  category={item.category}
                />
              ))}
            </div>
          ) : (
            <div
              className={styles["no-result"]}
            >
              <p>검색 결과가 없습니다.</p>
              <span>
                다른 검색어로 다시
                검색해보세요.
              </span>
            </div>
          )}
        </>
      )}
    </main>
  );
}