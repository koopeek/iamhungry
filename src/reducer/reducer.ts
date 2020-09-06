import { SET_RECIPES, ActionTypes } from "./actionTypes";

type Recipe = {
  id: string;
  imageUrl: string;
  name: string;
};

type State = {
  recipes: Recipe[];
};

export const reducer = (state: State, action: ActionTypes): State => {
  switch (action.type) {
    case SET_RECIPES:
      return state;
    default:
      return state;
  }
};
