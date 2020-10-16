import React from 'react';
import { SearchForm } from "../SearchForm/SearchForm";
import {SelectRecipe} from "../SelectRecipe/SelectRecipe";
import {Recipe} from "../../types/types";

type Props = {
    currentStep: number;
    recipes: Recipe[];
    setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Steps: React.FC<Props> = ( {currentStep, setCurrentStep, recipes, setRecipes} ) => {
    switch (currentStep) {
        case 1:
            return <SearchForm setCurrentStep={setCurrentStep} setRecipes={setRecipes} />
        case 2:
            return <SelectRecipe recipes={recipes} setCurrentStep={setCurrentStep} />
        default:
            return null;
    }
}

Steps.displayName = 'Steps';