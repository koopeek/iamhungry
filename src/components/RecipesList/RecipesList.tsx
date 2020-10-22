import React from 'react';
import {Recipe} from "../../types/types";
import {RecipesListItem} from "./RecipesListItem/RecipesListItem";
import './RecipesList.scss';

type Props = {
  recipes: Recipe[]
};

export const RecipesList: React.FC<Props> = ({ recipes }) => {
    return (
        <ul className="recipesList">
            {
                recipes.map(recipe => (
                    <li key={recipe.id} className="recipesList__item">
                        <RecipesListItem recipe={recipe} />
                    </li>
                ))
            }
        </ul>
    )
}

RecipesList.displayName = 'RecipesList';