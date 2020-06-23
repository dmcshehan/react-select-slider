import React from "react";
import styles from "./Button.module.scss";

export default function Button({ children, type, color, ...props }) {
  let className = "",
    colorClass = "";

  switch (type) {
    case "link":
      className = styles.link;
      break;
    default:
      className = styles.outline;
  }

  switch (color) {
    case "primary":
      colorClass = styles.primary;
      break;
    default:
      colorClass = "";
  }

  return (
    <button
      className={`${styles.button} ${className} ${colorClass}`}
      {...props}
    >
      {children}
    </button>
  );
}
