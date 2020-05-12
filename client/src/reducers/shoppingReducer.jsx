import { INITIAL, UPDATE_LISTS } from "./actionTypes";

export const shoppingReducer = (state, action) => {
  const { type, payload } = action;
  if (type == INITIAL) {
    return payload;
  }

  if (type == UPDATE_LISTS) {
    console.log('update lists in db')
    return state;
  }

  return state;
};
