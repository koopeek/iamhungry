import React from "react";
import styles from "./SearchBox.module.scss";

const SearchBox: React.FC = () => {
  return (
    <div className={styles.container}>
      <span>Search box</span>
    </div>
  );
};

export { SearchBox };
