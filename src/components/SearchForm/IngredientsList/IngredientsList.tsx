import { promises } from "dns";
import React from "react";

type Props = {
  ingredients: string[];
};

export const IngredientsList: React.FC<Props> = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
};
