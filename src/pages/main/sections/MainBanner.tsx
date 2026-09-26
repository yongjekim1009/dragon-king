import styles from "./MainBanner.module.css";
import { useState, useEffect, useRef } from "react";
import { BANNER_DATA } from "../../../data/bannerData";

import leftArrowIcon from "../../../assets/icons/banner/left-arrow.svg";
import rightArrowIcon from "../../../assets/icons/banner/right-arrow.svg";

export default function MainBanner() {
  const banners = [
    BANNER_DATA[BANNER_DATA.length - 1],
    ...BANNER_DATA,
    BANNER_DATA[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isAnimating = useRef(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 터치 좌표 Ref (number 타입 지정)
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // 핸들러들
  const handlePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // 타입 가드: intervalRef가 존재할 때만 clear
    if (intervalRef.current) clearInterval(intervalRef.current);

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    startInterval();
  };

  const handleNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    if (intervalRef.current) clearInterval(intervalRef.current);

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    startInterval();
  };

  const startInterval = () => {
    // 이전 인터벌 찌꺼기 제거 (메모리 누수 방지)
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!isAnimating.current) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 5000);
  };

  // 터치 이벤트 타입 지정 (React.TouchEvent)
  const onTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    const minSwipeDistance = 50;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      // 언마운트 시 클린업
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      if (currentIndex === banners.length - 1) {
        setIsTransitioning(false);
        setCurrentIndex(1);
      } else if (currentIndex === 0) {
        setIsTransitioning(false);
        setCurrentIndex(banners.length - 2);
      }
      isAnimating.current = false;
    }, 500);

    return () => clearTimeout(transitionTimer);
  }, [currentIndex, banners.length]);

  let displayPage = currentIndex;
  if (currentIndex === 0) displayPage = BANNER_DATA.length;
  else if (currentIndex === banners.length - 1) displayPage = 1;

  let translateX = "";
  let slideItemStyle = {};

  if (isMobile) {
    const gapPx = 10;
    const sideMargin = 20;
    const itemWidth = containerWidth - sideMargin * 2;
    slideItemStyle = { width: `${itemWidth}px` };
    const centerOffset = (containerWidth - itemWidth) / 2;
    translateX = `calc(${centerOffset}px - (${currentIndex} * (${itemWidth}px + ${gapPx}px)))`;
  } else {
    const BANNER_WIDTH_REM = 63;
    const GAP_REM = 13.8;
    const ITEM_TOTAL_WIDTH_REM = BANNER_WIDTH_REM + GAP_REM;
    translateX = `calc(50% - 31.5rem - (${currentIndex * ITEM_TOTAL_WIDTH_REM}rem))`;
  }

  if (isMobile && containerWidth === 0) {
    return (
      <section
        ref={containerRef}
        className={styles["banner-container"]}
        style={{ opacity: 0 }}
      />
    );
  }

  return (
    <section
      className={styles["banner-container"]}
      ref={containerRef}
      onTouchStart={isMobile ? onTouchStart : undefined}
      onTouchMove={isMobile ? onTouchMove : undefined}
      onTouchEnd={isMobile ? onTouchEnd : undefined}
      aria-label="메인 프로모션 배너"
    >
      {!isMobile && (
        <nav aria-label="배너 슬라이드 조작">
          <button
            type="button"
            className={`${styles["nav-btn"]} ${styles["prev"]}`}
            onClick={handlePrev}
            aria-label="이전 배너"
          >
            <img
              src={leftArrowIcon}
              alt="" // 버튼에 aria-label이 있으므로 이미지는 alt를 비워 중복 읽기를 방지
              className={styles["arrow-icon"]}
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            className={`${styles["nav-btn"]} ${styles["next"]}`}
            onClick={handleNext}
            aria-label="다음 배너"
          >
            <img
              src={rightArrowIcon}
              alt=""
              className={styles["arrow-icon"]}
              aria-hidden="true"
            />
          </button>
        </nav>
      )}

      <div
        className={styles["slide-track"]}
        role="group"
        aria-roledescription="carousel"
        style={{
          transform: `translateX(${translateX})`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {banners.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <article
              key={index}
              className={`${styles["slide-item"]} ${
                isActive ? styles.active : ""
              }`}
              style={isMobile ? slideItemStyle : undefined}
              aria-hidden={!isActive}
            >
              <img
                src={isMobile ? item.mobile : item.pc}
                alt={item.alt || `프로모션 배너 ${index + 1}`}
                className={styles["banner-image"]}
                draggable={false}
              />
            </article>
          );
        })}
      </div>

      <div className={styles["page-badge"]} aria-live="polite">
        <span>{displayPage}</span>
        <span aria-hidden="true"> / </span>
        <span>{BANNER_DATA.length}</span>
      </div>
    </section>
  );
}
