import React, { FormEvent } from "react";
import { Recipe } from "../../types/types";
import { Field, Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import { Button } from "../Button/Button";
import { Icon, IconTypes } from "../Icon/Icon";
import { fetchRecipes } from "../../services/api";
import "./SearchForm.scss";

type Props = {
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

interface FormValues extends FormEvent<HTMLFormElement> {
  includedIngredients: string[];
}

export const SearchForm: React.FC<Props> = ({ setRecipes, setCurrentStep }) => {
  const handleSubmitForm = async ({ includedIngredients }: FormValues) => {
    const recipes = await fetchRecipes({ includedIngredients });

    if (recipes) {
      setRecipes(recipes);
      setCurrentStep(2);
    }
  };

  const isAtLeastOneIncludedIngredientProvided = ({
    includedIngredients,
  }: FormValues): boolean => {
    if (includedIngredients && includedIngredients.length > 0) {
      return includedIngredients.filter((ingredient) => ingredient).length > 0;
    }
    return false;
  };

  const initialIncludedIngredients = [""];

  return (
    <div className="searchForm-wrapper">
      <h3>WHAT DO YOU WANT TO EAT TODAY?</h3>

      <Form
        onSubmit={handleSubmitForm}
        mutators={{
          ...arrayMutators,
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push },
          },
          values,
        }) => {
          return (
            <form onSubmit={handleSubmit} className="searchForm">
              <div className="searchForm__includedIngredients">
                <p className="searchForm__includedIngredients__title">
                  Included ingredients
                  <span className="highlightedInformation">
                    (at least one required)
                  </span>
                </p>

                <div className="searchForm__includedIngredients__content">
                  <Button
                    type="button"
                    textContent="Add ingredient name"
                    disabled={false}
                    handleClick={() => push("includedIngredients", undefined)}
                  />
                  <div className="searchForm__includedIngredients__content__fieldArray">
                    <FieldArray
                      name="includedIngredients"
                      initialValue={initialIncludedIngredients}
                    >
                      {({ fields }) =>
                        fields.map((name, index) => (
                          <div
                            key={name}
                            className="searchForm__includedIngredients__content__fieldArray__item"
                          >
                            <Field
                              name={name}
                              component="input"
                              placeholder="E.g. chicken, tomato, potato..."
                              className="input"
                            />
                            {values.includedIngredients &&
                            values.includedIngredients.length > 1 ? (
                              <Icon
                                iconType={IconTypes.REMOVE}
                                handleClick={() => fields.remove(index)}
                              />
                            ) : null}
                          </div>
                        ))
                      }
                    </FieldArray>
                  </div>
                </div>
              </div>
              <div className="searchForm__buttons">
                <Button
                  type="submit"
                  disabled={!isAtLeastOneIncludedIngredientProvided(values)}
                  textContent="Search"
                />
              </div>
            </form>
          );
        }}
      />
    </div>
  );
};

SearchForm.displayName = "SearchForm";
