import { Recipe, Step } from '../types/types';

export const diets: string[] = [
  "gluten free",
  "ketogenic",
  "vegetarian",
  "lacto vegetarian",
  "ovo vegetarian",
  "vegan",
  "pascetarian",
  "paleo",
  "primal",
  "whole30",
];

export const intolerances: string[] = [
  "diary",
  "egg",
  "gluten",
  "grain",
  "peanut",
  "seafood",
  "sesame",
  "shellfish",
  "soy",
  "sulfite",
  "wheat",
];

export const mealTypes: string[] = [
  "main course",
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
  "breakfast",
  "soup",
  "beverage",
  "sauce",
  "marinade",
  "fingerfood",
  "snack",
  "drink",
];

export const STEPS: Array<Step> = [
  {
    name: 'Fill in the form',
    orderNumber: 1
  },
  {
    name: 'Select recipe',
    orderNumber: 2
  },
  {
    name: 'Show ingredients and preparation steps',
    orderNumber: 3
  }
];

export const RECIPES_MOCK: Recipe[] = [
  {
    id: "59221302",
    imageUrl: "https://spoonacular.com/recipeImages/591302-312x231.jpg",
    name: "Summer Vegetable Tian"
  },
  {
    id: "59331302",
    imageUrl: "https://spoonacular.com/recipeImages/591302-312x231.jpg",
    name: "Summer Vegetable Tian"
  },
  {
    id: "59331302",
    imageUrl: "https://spoonacular.com/recipeImages/591302-312x231.jpg",
    name: "Summer Vegetable Tian"
  },
  {
    id: "59133302",
    imageUrl: "https://spoonacular.com/recipeImages/591302-312x231.jpg",
    name: "Summer Vegetable Tian"
  },
  {
    id: "59130233",
    imageUrl: "https://spoonacular.com/recipeImages/591302-312x231.jpg",
    name: "Summer Vegetable Tian"
  },
]
