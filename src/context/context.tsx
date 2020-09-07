import { createContext } from "react";
import { Recipe } from "../types/types";

type ContextProps = {
  recipes: Recipe[];
  fetchRecipes: () => Promise<void>;
};

const AppContext = createContext<Partial<ContextProps>>({});

export { AppContext };
