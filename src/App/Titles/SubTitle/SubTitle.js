import React from "react";
import styles from "./SubTitle.module.css";

export default function SubTitle({ children, ...props }) {
  return (
    <h2 className={styles.subTitle} {...props}>
      {children}
    </h2>
  );
}
