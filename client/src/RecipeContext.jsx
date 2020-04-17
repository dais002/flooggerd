import React, { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [initialState, setInitialState] = useState([]);
  const [fetch, setFetch] = useState(false)

  useEffect(() => {
    console.log("fetching initialState");
    axios.get("/api/recipes").then((res) => setInitialState(res.data));
  }, [fetch]);

  const setGlobalState = useCallback(
    (response) => {
      setInitialState([...initialState, response]);
    },
    [initialState]
  );


  const value = {
    initialState,
    setGlobalState,
    setFetch,
    fetch
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
