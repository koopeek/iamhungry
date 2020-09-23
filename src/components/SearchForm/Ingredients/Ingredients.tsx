import React, { useState } from "react";
import { IngredientsList } from "../IngredientsList/IngredientsList";

type Props = {
  ingredients: string[];
  handleChange: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Ingredients: React.FC<Props> = ({ ingredients, handleChange }) => {
  const [value, setValue] = useState<string>("");

  const handleAddIngredient = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    handleChange([...ingredients, value]);
    setValue("");
  };

  return (
    <div>
      <IngredientsList ingredients={ingredients} />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={(e) => handleAddIngredient(e)}>Dodaj</button>
    </div>
  );
};

Ingredients.displayName = "Ingredients";
