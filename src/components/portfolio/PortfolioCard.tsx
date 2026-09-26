import { Link } from "react-router-dom";
import styles from "./PortfolioCard.module.css";

import {
  PORTFOLIO_CATEGORY_LABELS,
  type PortfolioCategory,
} from "../../types/portfoiloType";

interface PortfolioCardProps {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
}

export default function PortfolioCard({
  id,
  title,
  thumbnail,
  category,
}: PortfolioCardProps) {
  return (
    <Link
      to={`/portfolio/${id}`}
      state={{ category }}
      className={styles["portfolio-link"]}
    >
      <div className={styles["portfolio-card"]}>
        <div className={styles["portfolio-thumbnail-box"]}>
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className={styles["portfolio-thumbnail-img"]}
            />
          )}
        </div>

        <div className={styles["portfolio-card-wrapper"]}>
          <p className={styles["portfolio-card-category"]}>
            {
              PORTFOLIO_CATEGORY_LABELS[
                category as PortfolioCategory
              ]
            }
          </p>

          <p className={styles["portfolio-card-title"]}>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}