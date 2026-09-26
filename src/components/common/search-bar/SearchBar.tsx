import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SearchBar.module.css";
import searchIcon from "../../../assets/icons/common/search-bar-icon.svg";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedKeyword = keyword.trim();

    // 검색어가 비어있으면 검색하지 않음
    if (!trimmedKeyword) {
      return;
    }

    // 검색 결과 페이지로 이동
    navigate(`/search?q=${encodeURIComponent(trimmedKeyword)}`);
  };

  return (
    <div className={styles["search-wrapper"]}>
      <form
        className={styles["search-container"]}
        onSubmit={handleSubmit}
      >
        <img
          src={searchIcon}
          alt=""
          className={styles["search-icon"]}
        />

        <input
          type="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className={styles["search-input"]}
          placeholder="검색어를 입력하세요"
          aria-label="포트폴리오 검색"
        />
      </form>
    </div>
  );
}