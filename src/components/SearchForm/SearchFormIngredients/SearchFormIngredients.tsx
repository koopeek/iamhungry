import React, { useState } from "react";
import { FormInput } from "../../FormInput/FormInput";
import { SearchFormIngredientsList } from "./SearchFormIngredientsList/SearchFormIngredientsList";
import "./SearchFormIngredients.scss";

type Props = {
  ingredients: string[];
  handleChange: React.Dispatch<React.SetStateAction<string[]>>;
};

export const SearchFormIngredients: React.FC<Props> = ({
  ingredients,
  handleChange,
}) => {
  const [value, setValue] = useState<string>("");

  const handleAddIngredient = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();

    if (value && !ingredients.includes(value)) {
      handleChange([...ingredients, value]);
      setValue("");
    }
  };

  return (
    <div className="search-form-ingredients">
      <div className="search-form-ingredients__form">
        <div className="search-form-ingredients__form__field">
          <FormInput
            name="ingredient"
            type="text"
            label="Included ingredients"
            placeholder="Tomato..."
            value={value}
            onChange={setValue}
          />
        </div>
        <button onClick={(e) => handleAddIngredient(e)}>Dodaj</button>
      </div>
      <div className="search-form-ingredients__list">
        <SearchFormIngredientsList ingredients={ingredients} />
      </div>
    </div>
  );
};

SearchFormIngredients.displayName = "SearchFormIngredients";
