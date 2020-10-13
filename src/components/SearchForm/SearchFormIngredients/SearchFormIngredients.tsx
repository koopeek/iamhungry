import React, { useState } from "react";
import { FormInput } from "../../FormInput/FormInput";
import { SearchFormIngredientsList } from "./SearchFormIngredientsList/SearchFormIngredientsList";
import { FaPlus } from 'react-icons/fa';
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

  const handleAddIngredient = (): void => {
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
            placeholder="Some ingredient name"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="search-form-ingredients__form__button-wrapper">
          <button type="button" className="search-form-ingredients__form__button" onClick={() => handleAddIngredient()}>
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="search-form-ingredients__list">
        <SearchFormIngredientsList ingredients={ingredients} />
      </div>
    </div>
  );
};

SearchFormIngredients.displayName = "SearchFormIngredients";
