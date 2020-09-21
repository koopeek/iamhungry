import React, { ReactNode, useState } from "react";
import { AppContext } from "./context";
import { Recipe } from "../types/types";

type Props = {
  children: ReactNode;
};

const IM_HUNGRY_API_SEARCH_URL =
  "https://imhungryy.herokuapp.com/recipes/search";

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async (ingredient: string) => {
    const response = await fetch(
      `${IM_HUNGRY_API_SEARCH_URL}?includedIngredient=${ingredient}`,
      { method: "GET" }
    )
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <AppContext.Provider
      value={{ recipes: recipes, fetchRecipes: fetchRecipes }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider };
