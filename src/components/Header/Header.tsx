import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>I am hungry</div>
    </header>
  );
};

export { Header };
