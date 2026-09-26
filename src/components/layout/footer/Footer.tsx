import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer-wrapper"]}>
      <div className={styles["footer-container"]}>
        {/* 로고 영역 */}
        <h2 className={styles["footer-logo"]}>
          <strong className={styles["logo-strong"]}>DRAGON</strong>KING
        </h2>

        {/* 정보 영역 */}
        <address className={styles["footer-info"]}>
          <p>
            드래곤킹
            <span className={styles["footer-divider"]}>|</span>
            디자이너 : 김용제
          </p>
          <p>이메일 : dragonking1009@naver.com</p>
          <br />
          <p>Copyright © 드래곤킹. All Rights Reserved.</p>
        </address>
      </div>
    </footer>
  );
}
