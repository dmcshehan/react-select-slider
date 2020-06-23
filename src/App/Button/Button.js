import React from "react";
import styles from "./Button.module.scss";

export default function Button({ children, type, ...props }) {
  let className = "";
  switch (type) {
    case "primary":
      className = styles.primary;
      break;
    case "link":
      className = styles.link;
      break;
    default:
      className = styles.outline;
  }

  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
}
