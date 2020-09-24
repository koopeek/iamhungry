import React from "react";
import { SearchFormIngredientsListItem } from "./SearchFormIngredientsListItem/SearchFormIngredientsList";

type Props = {
  ingredients: string[];
};

export const SearchFormIngredientsList: React.FC<Props> = ({
  ingredients = [],
}) => {
  return (
    <ul>
      {ingredients.map((ingredient, i) => (
        <SearchFormIngredientsListItem key={i} ingredient={ingredient} />
      ))}
    </ul>
  );
};

SearchFormIngredientsList.displayName = "SearchFormIngredientsList";
