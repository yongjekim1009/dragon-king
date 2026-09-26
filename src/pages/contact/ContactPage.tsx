import React from 'react';
import styles from './ContactPage.module.css';

import BasicSpacer from './../../components/common/spacer/BasicSpacer';

const ContactPage: React.FC = () => {
  return (
    <div className={styles["contact-container"]}>

      <BasicSpacer/>
      
      {/* 헤더 섹션 */}
      <header className={styles["contact-header"]}>
        <p className={styles["contact-header-sub"]}>Let's Work Together.</p>
        <h1 className={styles["contact-header-title"]}>
          좋은 아이디어를<br />함께 만들어갑니다
        </h1>
        <p className={styles["contact-header-desc"]}>
          새로운 프로젝트와 협업에 열려 있습니다.<br />
          웹 디자인부터 프로모션, 콘텐츠 디자인까지<br />
          편하게 연락해 주세요.
        </p>
        <p className={styles["contact-header-email"]}>
          문의 : dragonking1009@naver.com
        </p>
        <p className={styles["contact-header-guide"]}>
          (보통 영업일 기준 24~48시간 이내에 회신드립니다.)
        </p>
      </header>

      <BasicSpacer/>
      
    </div>
  );
};

export default ContactPage;