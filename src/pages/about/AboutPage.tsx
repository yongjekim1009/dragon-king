import React from 'react';
import styles from './AboutPage.module.css';
import iconThink from "./../../assets/icons/about/think_icon.svg";
import iconEdit from "./../../assets/icons/about/edit_icon.svg";
import iconCheck from "./../../assets/icons/about/check_icon.svg";
import iconArrow from "./../../assets/icons/about/arrow_down_icon.svg";

import imgWeb from "./../../assets/imeges/about/about_banner_01.webp";
import imgPromotion from "./../../assets/imeges/about/about_banner_02.webp";
import imgCommerce from "./../../assets/imeges/about/about_banner_03.webp";

import BasicSpacer from './../../components/common/spacer/BasicSpacer';

// 'How I Do' 섹션을 위한 데이터 리스트
const stepList = [
  { num: '01', title: 'Understand', description: '목적 · 타깃 · 요구사항 파악' },
  { num: '02', title: 'Define', description: '핵심 메시지 · 방향 설정' },
  { num: '03', title: 'Design', description: '비주얼 구체화 · 콘텐츠 제작' },
  { num: '04', title: 'Refine', description: '피드백 · 디테일 개선' },
  { num: '05', title: 'Deliver', description: '최종 결과물 완성' },
];

const AboutPage: React.FC = () => {
  return (
    <div className={styles["about-container"]}>

      <BasicSpacer/>
      
      {/* 헤더 섹션 */}
      <header className={styles["about-header"]}>
        <p className={styles["about-header-sub"]}>Make It Matter. Make It Clear.</p>
        <h1 className={styles["about-header-title"]}>
          의미있는 결과물로<br />명확하게 가치를 전달합니다
        </h1>
        <p className={styles["about-header-description"]}>
          콘텐츠의 목적과 핵심을 이해하고<br />
          시선을 끌면서도 메시지가 명확하게 전달되는<br />
          실질적인 가치를 만드는 디자인을 지향합니다.
        </p>
        <p className={styles["about-header-email"]}>
          문의 : dragonking1009@naver.com
        </p>
      </header>

      {/* 프로세스 요약 섹션 */}
      <section className={styles["about-process-section"]}>
        <div className={styles["about-process-card"]}>
          <div className={styles["about-process-card-icon"]}>
            <img src={iconThink} alt="Think 아이콘" />
          </div>
          <div>
            <h3>THINK</h3>
            <p>목적을 이해하고,<br />본질에서 시작합니다.</p>
          </div>
        </div>
        <div className={styles["about-process-card"]}>
          <div className={styles["about-process-card-icon"]}>
            <img src={iconEdit} alt="Edit 아이콘" />
          </div>
          <div>
            <h3>EDIT</h3>
            <p>불필요함을 덜어내고,<br />더 명확하게 다듬습니다.</p>
          </div>
        </div>
        <div className={styles["about-process-card"]}>
          <div className={styles["about-process-card-icon"]}>
            <img src={iconCheck} alt="Check 아이콘" />
          </div>
          <div>
            <h3>DONE</h3>
            <p>생각을 디자인으로,<br />디자인을 결과로 완성합니다.</p>
          </div>
        </div>
      </section>

      {/* What I Do 섹션 */}
      <section className={styles["about-what-section"]}>
        <h2 className={styles["section-title"]}>What I Do</h2>
        <div className={styles["service-wrapper"]}>
          <div className={styles["service-item"]}>
            <div className={styles["service-text"]}>
              <h3>Web Design</h3>
              <p>브랜드 웹사이트와 프로모션 페이지의<br />구조부터 비주얼까지 설계합니다.</p>
            </div>
            <div className={styles["service-img"]}>
              <img src={imgWeb} alt="Web Design" />
            </div>
          </div>
          <div className={styles["service-item"]}>
            <div className={styles["service-text"]}>
              <h3>Promotion Design</h3>
              <p>게임·브랜드·캠페인의 목적에 맞는<br />프로모션 비주얼을 제작합니다.</p>
            </div>
            <div className={styles["service-img"]}>
              <img src={imgPromotion} alt="Promotion Design" />
            </div>
          </div>
          <div className={styles["service-item"]}>
            <div className={styles["service-text"]}>
              <h3>Commerce Design</h3>
              <p>제품의 특징과 구매 포인트를 구조화하여<br />상세페이지와 커머스 콘텐츠를 디자인합니다. </p>
            </div>
            <div className={styles["service-img"]}>
              <img src={imgCommerce} alt="Commerce Design" />
            </div>
          </div>
        </div>
      </section>

      {/* How I Do 섹션 */}
      <section className={styles["about-how-section"]}>
        <h2 className={styles["section-title"]}>How I Do</h2>
        <div className={styles["step-list"]}>
          {stepList.map((step, index) => (
            <React.Fragment key={step.num}>
              <div className={styles["step-item"]}>
                <div className={styles["title-wrap"]}>
                  <span className={styles["step-num"]}>{step.num}</span>
                  <span className={styles["step-title"]}>{step.title}</span>
                </div>
                <div className={styles["step-desc"]}>{step.description}</div>
              </div>
              {/* 마지막 항목이 아닐 때만 화살표 표시 */}
              {index < stepList.length - 1 && (
                <div className={styles["arrow-icon"]}>
                  <img src={iconArrow} alt="화살표 아이콘" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <BasicSpacer/>
      
    </div>
  );
};

export default AboutPage;