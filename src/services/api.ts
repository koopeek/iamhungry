import { Recipe } from "../types/types";

export type FetchRecipesRequestData = {
  name?: string;
  includedIngredients: string[];
  excludedIngredients?: string[];
};

export const fetchRecipes = async (
  obj: FetchRecipesRequestData
): Promise<Recipe[]> => {
  const includedIngredientsJoined = obj.includedIngredients.join(",");

  const recipes = await fetch(
    `https://imhungryy.herokuapp.com/recipes/search?includedIngredient=${includedIngredientsJoined}`
  )
    .then((data) => data.json())
    .catch((err) => console.log(err));

  if (recipes.recipes) {
    return recipes.recipes;
  }

  return [];
};
