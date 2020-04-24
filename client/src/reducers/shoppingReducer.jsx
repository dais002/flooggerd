import { INITIAL } from "./actionTypes";
import axios from "axios";

export const shoppingReducer = (state, action) => {
  if (action.type == INITIAL) {
    return action.payload;
  }
  return state;
};
