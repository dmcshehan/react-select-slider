import React from "react";
import styles from "./SliderDot.module.scss";

export default function SliderDot({ active, ...props }) {
  const activeClass = active ? styles.activeDot : "";

  return (
    <span className={`${styles.sliderDot} ${activeClass}`} {...props}></span>
  );
}
