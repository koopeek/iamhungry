import React from 'react';
import {Recipe} from "../../../types/types";
import './RecipesListItem.scss';

type Props = {
    recipe: Recipe;
}

export const RecipesListItem: React.FC<Props> = ({ recipe }) => {
    return (
        <div className="recipesListItem">
           <img src={recipe.imageUrl} alt="" className="recipesListItem__image "/>
           <div className="recipesListItem__name">
               {recipe.name}
           </div>
        </div>
    )
}

RecipesListItem.displayName = 'RecipesListItem';