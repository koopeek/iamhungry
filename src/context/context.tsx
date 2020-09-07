import { createContext } from "react";

export type Recipe = {
  id: string;
  name: string;
  imageUrl: string;
};

type Context = {
  recipes?: Recipe[];
  fetchRecipes?: () => Promise<void>;
};

export default createContext<Context>({});
