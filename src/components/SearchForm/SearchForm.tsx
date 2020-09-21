import React, { useState } from "react";
import { FormInput } from "../FormInput/FormInput";
import { Ingredients } from "./Ingredients/Ingredients";
import "./SearchForm.scss";

const SearchForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [includedIngredients, setIncludedIngredients] = useState<string[]>([]);
  const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]);

  const hangleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
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
        <Ingredients
          ingredients={includedIngredients}
          handleChange={setIncludedIngredients}
        />
        <Ingredients
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

export { SearchForm };
