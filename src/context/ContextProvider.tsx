import React, { ReactNode, useState } from "react";
import { AppContext } from "./context";
import { Recipe } from "../types/types";
import { FetchRecipesRequestData, fetchRecipes } from "../services/api";

type Props = {
  children: ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const getRecipes = async (obj: FetchRecipesRequestData): Promise<void> => {
    const recipes = await fetchRecipes(obj);
    setRecipes(recipes);
  };

  return (
    <AppContext.Provider value={{ recipes: recipes, getRecipes: getRecipes }}>
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider };
