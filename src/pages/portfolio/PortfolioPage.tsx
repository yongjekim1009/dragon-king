import styles from "./PortfolioPage.module.css";
import PortfolioList from "../../components/portfolio/PortfolioList";
import SearchBar from "../../components/common/search-bar/SearchBar";
import BasicSpacer from "./../../components/common/spacer/BasicSpacer";

export default function PortfolioPage() {
  return (
    <main
      className={styles["page-container"]}
      aria-labelledby="portfolio-page-title"
    >
      
      <BasicSpacer />

      <header className={styles["header-area"]}>
        <hgroup>
          <h1 id="portfolio-page-title" className={styles["page-title"]}>
            Portfolio
          </h1>
          <p className={styles["page-desc"]}>다양한 작업물을 확인해보세요.</p>
        </hgroup>
      </header>
      
      <SearchBar />

      <PortfolioList />

      <BasicSpacer />

    </main>
  );
}
