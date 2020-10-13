import React, { useState } from "react";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { Recipe } from "./types/types";
import "./App.scss";

const App: React.FC = () => {

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
      <div className="wrapper-app">
        <div className="app">
          <div className="app__searchForm">
            <SearchForm setRecipes={setRecipes} />
          </div>
        </div>
      </div>
  );
};

export { App };
