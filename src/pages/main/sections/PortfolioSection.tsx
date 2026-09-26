import styles from "./PortfolioSection.module.css";
import PortfolioList from "../../../components/portfolio/PortfolioList";

export default function MainPortfolioSection() {
  return (
    <section
      className={styles["portfolio-section"]}
      aria-labelledby="portfolio-section-heading"
    >
      <header className={styles["portfolio-header-container"]}>
        <h2 id="portfolio-section-heading">
          다양한 포트폴리오를<br />
          확인해보세요
        </h2>
      </header>

      {/* 8개 제한 및 전체보기 버튼 활성화 */}
      <PortfolioList limit={8} showMoreButton />
    </section>
  );
}