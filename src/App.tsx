import React from "react";
import { ContextProvider } from "./context/ContextProvider";
import { SearchForm } from "./components/SearchForm/SearchForm";
import "./App.scss";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <div className="wrapper-app">
        <div className="app">
          <div className="app__searchForm">
            <SearchForm />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
};

export { App };
