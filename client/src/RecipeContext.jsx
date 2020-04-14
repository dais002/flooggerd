import React, { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    axios.get("/recipes").then((res) => setInitialState(res.data));
  }, []);

  const value = initialState;
  console.log("initialState", value);

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
