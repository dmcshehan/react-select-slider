import React from "react";
import styles from "./HeaderContainer.module.css";

export default function HeaderContainer({ children }) {
  return <header className={styles.headerContainer}>{children}</header>;
}
