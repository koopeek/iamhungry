import React from 'react';
import {Recipe} from "../../types/types";
import {RecipesList} from "../RecipesList/RecipesList";
import './SelectRecipe.scss';

type Props = {
    recipes: Recipe[];
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const SelectRecipe: React.FC<Props> = ({ recipes, setCurrentStep}) => {
    return (
        <div className="selectRecipe">

            <h2>Select recipe</h2>

            <p>Check out our suggestions and choose if you find something for yourself</p>

            <div className='selectRecipe__list'>
                <RecipesList recipes={recipes} />
            </div>
        </div>
    );
}

SelectRecipe.displayName = 'SelectRecipe';