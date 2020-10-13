import React, { useState } from "react";
import { Recipe } from "../../types/types";
import { FormInput } from "../FormInput/FormInput";
import { SearchFormIngredients } from "./SearchFormIngredients/SearchFormIngredients";
import { fetchRecipes } from "../../services/api";
import "./SearchForm.scss";

type Props = {
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

export const SearchForm: React.FC<Props> = ({ setRecipes }) => {
  const [name, setName] = useState<string>("");
  const [includedIngredients, setIncludedIngredients] = useState<string[]>([]);
  const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const recipes = await  fetchRecipes({ name, includedIngredients, excludedIngredients });

    if (recipes) {
        setRecipes(recipes);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="searchForm">
      <div className="searchForm__nameInput">
        <FormInput
          name="name"
          type="text"
          label="Meal name"
          placeholder="Enter meal name..."
          value={name}
          onChange={setName}
        />
      </div>
      <div className="searchForm__ingredients">
        <SearchFormIngredients
          ingredients={includedIngredients}
          handleChange={setIncludedIngredients}
        />
        <SearchFormIngredients
          ingredients={excludedIngredients}
          handleChange={setExcludedIngredients}
        />
      </div>
      <div className="searchForm__submitButton-wrapper">
        <button className="searchForm__submitButton" type="submit">Search</button>
      </div>
    </form>
  );
};

SearchForm.displayName = "SearchForm";
