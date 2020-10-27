import React from 'react';
import {CurrentStepContent} from "../CurrentStepContent/CurrentStepContent";
import { Recipe } from "../../types/types";
import { StepsList } from "../StepsList/StepsList";

type Props = {
    currentStep: number;
    recipes: Recipe[];
    setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Content: React.FC<Props>= ({ currentStep, recipes, setRecipes, setCurrentStep }) => {
    return(
        <>
            <StepsList />
            <CurrentStepContent currentStep={currentStep} recipes={recipes} setRecipes={setRecipes} setCurrentStep={setCurrentStep} />
        </>
    );
}

Content.displayName = 'Content';