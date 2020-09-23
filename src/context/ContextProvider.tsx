import React, { ReactNode, useState } from "react";
import { AppContext, FetchRecipesArgs } from "./context";
import { Recipe } from "../types/types";

type Props = {
  children: ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async (obj: FetchRecipesArgs): Promise<void> => {
    const includedIngredientsJoined = obj.includedIngredients.join(",");

    const recipes = await fetch(
      `https://imhungryy.herokuapp.com/recipes/search?includedIngredient=${includedIngredientsJoined}`
    )
      .then((data) => data.json())
      .catch((err) => console.log(err));

    setRecipes(recipes);
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
