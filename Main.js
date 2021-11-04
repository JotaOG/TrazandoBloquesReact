import React from "react";
import styles from "../TrazandoBloques.module.css";

const Main = (props) => {
  return (
    <div className={styles.main_content}>
      {props.children}
    </div>
  );
};

export default Main;
