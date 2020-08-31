import React from "react";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ReactComponent as FoodSvg } from "./assets/svgs/food.svg";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.container__searchBox}>
          <SearchBox />
        </div>
        <div className={styles.container__svg}>
          <FoodSvg className={styles.container__svg__svg} />
        </div>
      </div>
    </div>
  );
};

export { App };
