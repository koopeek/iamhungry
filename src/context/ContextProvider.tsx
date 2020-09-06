import React, { useReducer, ReactNode } from "react";
import Context from "./context";
import { reducer } from "../reducer/reducer";

type Props = {
  children?: ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { recipes: [] });

  return (
    <Context.Provider value={{ recipes: state.recipes }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
