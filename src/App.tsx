import React, { useState } from "react";
import { Recipe } from "./types/types";
import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import "./App.scss";
import {Steps} from "./components/Steps/Steps";

const App: React.FC = () => {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
      <div className="app">
        <div className="app__leftPanel">
            <GeneralInfo />
        </div>
        <div className="app__rightPanel">
            <Steps currentStep={currentStep} />
        </div>
      </div>
  );
};

export { App };
