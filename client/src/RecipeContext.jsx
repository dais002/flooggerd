import React, { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    console.log('fetching initialState')
    axios.get("/api/recipes").then((res) => setInitialState(res.data));
  }, []);

  const setGlobalState = useCallback((response) => {
    setInitialState(response);
  }, []);

  const value = {
    initialState,
    setGlobalState,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
