import {memo} from "react";
import logo from "../../assets/react.svg";
import styles from "./style.module.css";

interface IProps {
  title: string;
  children?: React.ReactNode;
}

const Head: React.FC<IProps> = ({title, children}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <img src={logo} alt="logo"/>
        <h1>{title}</h1>
      </div>
      <div className={styles.content}>
        {children && children}
      </div>
    </header>
  )
}

export default memo(Head);