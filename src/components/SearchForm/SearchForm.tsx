import React, { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import { FormInput } from "../FormInput/FormInput";
import { SearchFormIngredients } from "./SearchFormIngredients/SearchFormIngredients";
import "./SearchForm.scss";

export const SearchForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [includedIngredients, setIncludedIngredients] = useState<string[]>([]);
  const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]);

  const { getRecipes } = useContext(AppContext);

  const hangleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (getRecipes) {
      getRecipes({ name, includedIngredients, excludedIngredients });
    }
  };

  return (
    <form onSubmit={hangleSubmitForm} className="searchForm">
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
      <div>
        <button type="submit">Szukaj</button>
      </div>
    </form>
  );
};

SearchForm.displayName = "SearchForm";
