import { DELETE_RECIPE, ADD_RECIPE, INITIAL } from "./actionTypes";

export const recipeReducer = (state, action) => {
  if (action.type == DELETE_RECIPE) {
    return state.filter((recipe) => recipe._id !== action.payload);
  }

  if (action.type == ADD_RECIPE) {
    return [...state, action.payload];
  }

  if (action.type == INITIAL) {
    return action.payload;
  }

  return state;
};
