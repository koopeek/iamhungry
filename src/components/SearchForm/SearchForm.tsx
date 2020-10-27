import React, { useState } from "react";
import { Recipe } from "../../types/types";
import { FormInput } from "../FormInput/FormInput";
import { fetchRecipes } from "../../services/api";
import "./SearchForm.scss";

type Props = {
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const SearchForm: React.FC<Props> = ({ setRecipes, setCurrentStep }) => {
  const [name, setName] = useState<string>("");
  const [includedIngredients, setIncludedIngredients] = useState<string>("");
  const [excludedIngredients, setExcludedIngredients] = useState<string>("");

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const includedIngredientsSplitted = includedIngredients.split(',').map(el => el.trim());
    const excludedIngredientsSplitted = excludedIngredients.split(',').map(el => el.trim());

    const recipes = await fetchRecipes({ name, includedIngredients: includedIngredientsSplitted, excludedIngredients: excludedIngredientsSplitted });

    if (recipes) {
        setRecipes(recipes);
        setCurrentStep(2);
    }
  };

  return (
      <div className="searchForm-wrapper">

          <h2>FILL IN THE FORM</h2>

          <p>Let us know what you want to eat by filling in the form below.</p>

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
                  <FormInput
                      name="includedIngredients"
                      type="text"
                      label="Included ingredients"
                      placeholder="E.g tomato, corn, cheese"
                      value={includedIngredients}
                      onChange={setIncludedIngredients}
                  />
                  <FormInput
                      name="excludedIngredients"
                      type="text"
                      label="Excluded ingredients"
                      placeholder="E.g tomato, corn, cheese"
                      value={excludedIngredients}
                      onChange={setExcludedIngredients}
                  />
              </div>
              <div className="searchForm__submitButton-wrapper">
                  <button className="searchForm__submitButton" type="submit">Search</button>
              </div>
          </form>
      </div>


  );
};

SearchForm.displayName = "SearchForm";
