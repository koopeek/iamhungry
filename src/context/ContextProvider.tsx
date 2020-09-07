import React, { ReactNode, useState } from "react";
import { AppContext } from "./context";
import { Recipe } from "../types/types";

type Props = {
  children: ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <AppContext.Provider value={{ recipes: recipes }}>
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider };
