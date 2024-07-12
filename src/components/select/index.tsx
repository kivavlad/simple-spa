import {memo} from "react";
import type {ISelect} from "../../types/i-select";
import styles from "./style.module.css";

interface IProps {
  value: string;
  setValue: (value: string) => any;
  options: ISelect[];
}

const Select: React.FC<IProps> = ({value, setValue, options}) => {
  return (
    <div className={styles.selector_wrapper}>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map((item) => (
          <option key={item.id} value={item.value}>{item.title}</option>
        ))}
      </select>
    </div>
  )
}

export default memo(Select);