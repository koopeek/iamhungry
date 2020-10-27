import React, { useState } from "react";
import { Recipe } from "./types/types";
import {Header} from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import "./App.scss";

const App: React.FC = () => {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
      <div className="app">
          <Header />
          <main className="app__content">
              <Content recipes={recipes} setCurrentStep={setCurrentStep} currentStep={currentStep} setRecipes={setRecipes} />
          </main>
      </div>
  );
};

export { App };
