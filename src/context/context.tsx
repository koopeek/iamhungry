import { createContext } from "react";

type Context = {
  fetchRecipes?: () => Promise<void>;
};

export default createContext<Context>({});
