import styles from "./CategoryButton.module.css";

import iconGame from "../../../assets/icons/common/category/category_icon_game.svg";
import iconFinance from "../../../assets/icons/common/category/category_icon_finance.svg";
import iconBeautyHealth from "../../../assets/icons/common/category/category_icon_beauty_health.svg"; 
import iconFood from "../../../assets/icons/common/category/category_icon_food.svg";
// import iconFashion from "../../../assets/icons/common/category/category_icon_fashion.svg";

const CATEGORIES = [
  { id: "game", label: "게임", icon: iconGame },
  { id: "finance", label: "금융", icon: iconFinance },
  { id: "beauty&health", label: "뷰티·건강", icon: iconBeautyHealth },
  { id: "food", label: "식품", icon: iconFood },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

interface CategoryButtonProps {
  selected: CategoryId;
  onSelect: (id: CategoryId) => void;
}

const CategoryButton = ({ selected, onSelect }: CategoryButtonProps) => {
  return (
    <div className={styles["category-btn-group"]}>
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          className={`${styles["category-item"]} ${
            selected === category.id ? styles["active"] : ""
          }`}
          onClick={() => onSelect(category.id)}
        >
          {/* 동그란 아이콘 영역 */}
          <div className={styles["icon-wrapper"]}>
            <img src={category.icon} alt={`${category.label} 아이콘`} />
          </div>
          {/* 하단 텍스트 영역 */}
          <span className={styles.label}>{category.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryButton;