import {memo} from "react";
import type {IReview} from "../../types/i-review";
import styles from "./style.module.css";

interface IProps {
  item: IReview;
  t: (text: string, number?: any) => string;
}

const ReviewItem: React.FC<IProps> = ({item, t}) => {
  return (
    <div className={styles.item}>
      <div className={styles.head}>
        <div className={styles.name}>
          <span className={styles.bold}>{t('name')}:</span> {item.name}</div>
        <div className={styles.date}>{item.date}</div>
      </div>
      <div className={styles.review}>
        <span className={styles.bold}>{t('review')}:</span> {item.review}
      </div>
    </div>
  )
}

export default memo(ReviewItem);