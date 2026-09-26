import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const handleMenuToggle = (
    e?: React.MouseEvent<HTMLButtonElement>
  ) => {
    e?.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const onDocumentClick = (e: MouseEvent) => {
      const path = e.composedPath();

      if (
        toggleBtnRef.current &&
        path.includes(toggleBtnRef.current)
      ) {
        return;
      }

      if (
        menuRef.current &&
        path.includes(menuRef.current)
      ) {
        return;
      }

      setIsMenuOpen(false);
    };

    document.addEventListener("click", onDocumentClick);

    return () =>
      document.removeEventListener(
        "click",
        onDocumentClick
      );
  }, [isMenuOpen]);

  return (
    <header className={styles["header-wrapper"]}>
      <div className={styles["header-container"]}>
        {/* 로고 */}
        <div className={styles["header-logo"]}>
          <h1>
            <Link to="/" onClick={closeMenu}>
              <strong className={styles["logo-strong"]}>
                DRAGON
              </strong>
              KING
            </Link>
          </h1>
        </div>

        {/* PC 메뉴 */}
        <nav className={styles["header-nav"]}>
          <ul className={styles["header-menu"]}>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? styles["active"] : ""
                }
              >
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles["active"] : ""
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles["active"] : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          ref={toggleBtnRef}
          className={styles["hamburger-btn"]}
          onClick={handleMenuToggle}
          aria-label={
            isMenuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`${styles["icon-stack"]} ${
              isMenuOpen ? styles.open : ""
            }`}
          >
            <span
              className={`material-symbols-outlined ${styles["stack-icon"]} ${styles.menu}`}
            >
              menu
            </span>

            <span
              className={`material-symbols-outlined ${styles["stack-icon"]} ${styles.close}`}
            >
              close
            </span>
          </span>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${styles["mobile-menu"]} ${
          isMenuOpen ? styles.open : ""
        }`}
      >
        <ul className={styles["mobile-menu-list"]}>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `${styles["mobile-link"]} ${
                  isActive ? styles["active"] : ""
                }`
              }
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles["mobile-link"]} ${
                  isActive ? styles["active"] : ""
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles["mobile-link"]} ${
                  isActive ? styles["active"] : ""
                }`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}