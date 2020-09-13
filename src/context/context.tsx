import { createContext } from "react";
import { Recipe } from "../types/types";

type ContextProps = {
  recipes: Recipe[];
  fetchRecipes: (ingredient: string) => Promise<void>;
};

const AppContext = createContext<Partial<ContextProps>>({});

export { AppContext };
