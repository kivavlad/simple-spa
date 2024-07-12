import {memo} from "react";
import type {IReview} from "../../types/i-review";
import styles from "./style.module.css";

interface IProps {
  list: IReview[];
  renderItems: (item: IReview) => React.ReactNode;
}

const List: React.FC<IProps> = ({list, renderItems}) => {
  return (
    <div className={styles.list}>
      {list.map((item) => (
        <div key={item.id} className={styles.item}>
          {renderItems(item)}
        </div>
      ))}
    </div>
  )
}

export default memo(List);