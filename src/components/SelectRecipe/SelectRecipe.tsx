import React from 'react';
import {Recipe} from "../../types/types";

type Props = {
    recipes: Recipe[];
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const SelectRecipe: React.FC<Props> = () => {
    return (
        <h2>SELECT RECIPE</h2>
    );
}

SelectRecipe.displayName = 'SelectRecipe';