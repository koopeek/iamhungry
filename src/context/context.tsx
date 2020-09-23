import { createContext } from "react";
import { Recipe } from "../types/types";

export type FetchRecipesArgs = {
  name?: string;
  includedIngredients: string[];
  excludedIngredients: string[];
};

type ContextProps = {
  recipes: Recipe[];
  fetchRecipes: (obj: FetchRecipesArgs) => Promise<void>;
};

export const AppContext = createContext<Partial<ContextProps>>({});
