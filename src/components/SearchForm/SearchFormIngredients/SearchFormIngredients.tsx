import React, { useState } from "react";
import { FormInput } from "../../FormInput/FormInput";
import { SearchFormIngredientsList } from "./SearchFormIngredientsList/SearchFormIngredientsList";
import "./SearchFormIngredients.scss";
import {Recipe} from "../../../types/types";

type Props = {
  label: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchFormIngredients: React.FC<Props> = ({label, value, setValue}) => {

  return (
    <div className="search-form-ingredients">
      <div className="search-form-ingredients__form">
        <div className="search-form-ingredients__form__field">
          <FormInput
            name="ingredient"
            type="text"
            label={label}
            placeholder="E.g tomato, corn, cheese"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      {/*<div className="search-form-ingredients__list">*/}
      {/*  <SearchFormIngredientsList ingredients={ingredients} />*/}
      {/*</div>*/}
    </div>
  );
};

SearchFormIngredients.displayName = "SearchFormIngredients";
