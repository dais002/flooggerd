import React, {
  createContext,
  useEffect,
  useCallback,
  useReducer,
} from "react";
import axios from "axios";
import { INITIAL } from "../reducers/actionTypes";
import { shoppingReducer } from "../reducers/shoppingReducer";

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, []);

  useEffect(() => {
    console.log("fetching lists from db");
    axios
      .get("/api/lists")
      .then((res) => dispatch({ type: INITIAL, payload: res.data }));
  }, []);

  const updateLists = useCallback(
    (item) => {
      dispatch({ type: UPDATE_LISTS, payload: item });
    },
    [dispatch]
  );

  const value = {
    state,
    updateLists,

  };

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  );
};
