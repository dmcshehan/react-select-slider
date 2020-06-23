import React from "react";
import styles from "./SelectBox.module.scss";

export default function SelectBox({ title, _id, selected, ...props }) {
  return (
    <div
      className={`${styles.selectBox} ${
        selected === _id ? styles.selected : ""
      }`}
      {...props}
    >
      <span className={styles.title}>{title}</span>
    </div>
  );
}
