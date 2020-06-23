import React from "react";
import styles from "./MainTitle.module.css";

export default function MainTitle({ children }) {
  return <h1 className={styles.mainTitle}>{children}</h1>;
}
