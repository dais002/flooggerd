import { INITIAL } from "./actionTypes";

export const shoppingReducer = (state, action) => {
  if (action.type == INITIAL) {
    return action.payload;
  }
  return state;
};
