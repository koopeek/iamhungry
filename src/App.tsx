import React from "react";
import { ContextProvider } from "./context/ContextProvider";
import { SearchBox } from "./components/SearchBox/SearchBox";
import "./App.scss";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <div className="wrapper-app">
        <div className="app">
          <div className="app__searchBox">
            <SearchBox />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
};

export { App };
