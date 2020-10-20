import { Step } from '../types/types';

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
    name: 'Show ingredients',
    orderNumber: 3
  },
  {
    name: 'Show preparation steps',
    orderNumber: 4
  }
];
