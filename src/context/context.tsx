import { createContext } from "react";
import { Recipe } from "../types/types";
import { FetchRecipesRequestData } from "../services/api";

type ContextProps = {
  recipes: Recipe[];
  getRecipes: (obj: FetchRecipesRequestData) => Promise<void>;
};

export const AppContext = createContext<Partial<ContextProps>>({});
