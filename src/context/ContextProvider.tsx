import React, { ReactNode, useState } from "react";
import Context, { Recipe } from "./context";

type Props = {
  children: ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async (): Promise<void> => {
    throw new Error("Not implemented.");
  };

  return (
    <Context.Provider value={{ recipes: recipes, fetchRecipes: fetchRecipes }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
