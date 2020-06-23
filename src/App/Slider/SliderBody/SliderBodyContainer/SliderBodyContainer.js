import React from "react";
import styles from "./SliderBodyContainer.module.css";

export default function SliderBodyContainer({ children }) {
  return <div className={styles.selectBoxContainer}>{children}</div>;
}
