import { ADD_RECIPES, ActionTypes } from "./actionTypes";

type GlobalState = {
  recipes: object[];
};

const initialState: GlobalState = {
  recipes: [],
};

export const reducer = (
  state = initialState,
  action: ActionTypes
): GlobalState => {
  switch (action.type) {
    case ADD_RECIPES:
      return state;
    default:
      return state;
  }
};
