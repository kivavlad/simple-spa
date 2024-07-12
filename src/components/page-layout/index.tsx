import {memo, Component} from "react";
import styles from "./style.module.css";

interface IProps {
  children: React.ReactNode;
}

class PageLayout extends Component<IProps> {

  render(): React.ReactNode {
    const {children} = this.props;

    return (
      <div className={styles.container}>
        {children}
      </div>
    )
  }
}

export default memo(PageLayout);