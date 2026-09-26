import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section
      className={styles["hero-section"]}
      aria-label="브랜드 메인 슬로건 및 소개"
    >
      <header className={styles["hero-content"]}>
        <hgroup>
          <p className={styles["hero-kicker"]}>Think, Edit, Done.</p>
          <h1>
            생각을 디자인하고 <strong>경험을 완성합니다</strong>
          </h1>
        </hgroup>

        <p className={styles["hero-description"]}>
          우리의 상상을 현실의 결과물로 만듭니다
        </p>
      </header>
    </section>
  );
}
