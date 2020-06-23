import React from "react";
import styles from "./SlideBodyContainer.module.css";

export default function SlideBodyContainer({ children }) {
  return <div className={styles.slideBodyContainer}>{children}</div>;
}
