import styles from "./PortfolioDetail.module.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import { PORTFOLIO_ITEMS } from "../../data/portfolioData";
import BasicSpacer from "../../components/common/spacer/BasicSpacer";

import {
  PORTFOLIO_CATEGORY_LABELS,
  type PortfolioCategory,
} from "../../types/portfoiloType";

export default function PortfolioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const previousCategory = location.state?.category;

  const project = PORTFOLIO_ITEMS.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <main className={styles["portfolio-detail-container"]}>
        <h1>프로젝트를 찾을 수 없습니다.</h1>

        <button
          type="button"
          onClick={() => navigate(-1)}
        >
          뒤로 가기
        </button>
      </main>
    );
  }

  return (
    <main
      className={styles["portfolio-detail-container"]}
      aria-labelledby="portfolio-title"
    >
      <BasicSpacer />

      <article className={styles["portfolio-detail-wrapper"]}>
        <header className={styles["portfolio-detail-header"]}>
          
          {/* 카테고리 */}
          <span className={styles["portfolio-category-badge"]}>
            {
              PORTFOLIO_CATEGORY_LABELS[
                project.category as PortfolioCategory
              ]
            }
          </span>

          {/* 제목 */}
          <h1
            id="portfolio-title"
            className={styles["portfolio-detail-title"]}
          >
            {project.title}
          </h1>

          {/* 설명 */}
          <p className={styles["portfolio-detail-desc"]}>
            {project.description}
          </p>

          <p className={styles["portfolio-detail-desc-sub"]}>
            {project.descriptionSub}
          </p>
        </header>

        <section
          className={styles["portfolio-detail-image-area"]}
          aria-label={`${project.title} 상세 이미지 목록`}
        >
          {/* PC 상세 이미지 */}
          {project.detailImages.map((imgSrc, index) => (
            <figure
              key={index}
              className={`${styles["portfolio-figure"]} ${
                project.detailSize === "small"
                  ? styles["portfolio-figure-small"]
                  : ""
              }`}
            >
              <img
                src={imgSrc}
                alt={`${project.title} 포트폴리오 상세 이미지 ${
                  index + 1
                }`}
                className={styles["portfolio-detail-img"]}
                loading="lazy"
              />
            </figure>
          ))}

          {/* 모바일 상세 이미지 */}
          {project.mobileDetailImages && (
            <div
              className={styles["portfolio-mobile-image-area"]}
            >
              {project.mobileDetailImages.map(
                (imgSrc, index) => (
                  <figure
                    key={index}
                    className={
                      styles["portfolio-mobile-figure"]
                    }
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} 모바일 상세 이미지 ${
                        index + 1
                      }`}
                      className={
                        styles["portfolio-mobile-detail-img"]
                      }
                      loading="lazy"
                    />
                  </figure>
                )
              )}
            </div>
          )}
        </section>

        <nav
          className={styles["portfolio-detail-nav"]}
          aria-label="포트폴리오 네비게이션"
        >
          <button
            type="button"
            onClick={() =>
              navigate("/portfolio", {
                state: {
                  category: previousCategory,
                },
              })
            }
            className={styles["portfolio-back-btn"]}
          >
            목록보기
          </button>
        </nav>
      </article>

      <BasicSpacer />
    </main>
  );
}