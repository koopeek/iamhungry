import React, { useReducer, ReactNode } from "react";
import Context from "./context";
import { reducer } from "../reducer/reducer";

type Props = {
  children: ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { recipes: [] });

  const fetchRecipes = async (): Promise<void> => {
    const recipes = await fetch(
      "https://imhungryy.herokuapp.com/recipes/search?includedIngredient=tomato",
      {
        method: "GET",
      }
    );
  };

  return (
    <Context.Provider value={{ fetchRecipes: fetchRecipes }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
