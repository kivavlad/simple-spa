import {useState, useEffect} from "react";
import {getCurrentTime} from "../../utils/utils";
import styles from "./style.module.css";

const Watch: React.FC = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return <div className={styles.watch}>{time}</div>
}

export default Watch;