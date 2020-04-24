import React, {
  createContext,
  useEffect,
  useCallback,
  useReducer,
} from "react";
import axios from "axios";
import { recipeReducer } from "../reducers/recipeReducer";
import { INITIAL, ADD_RECIPE, DELETE_RECIPE } from "../reducers/actionTypes";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, []);

  // when component mounts, set initial state
  useEffect(() => {
    console.log("fetching recipes from db");
    axios
      .get("/api/recipes")
      .then((res) => dispatch({ type: INITIAL, payload: res.data }));
  }, []);

  const addRecipe = useCallback(
    (recipe) => {
      dispatch({ type: ADD_RECIPE, payload: recipe });
    },
    [dispatch]
  );

  const deleteRecipe = useCallback(
    (id) => {
      dispatch({ type: DELETE_RECIPE, payload: id });
    },
    [dispatch]
  );

  const value = {
    state,
    addRecipe,
    deleteRecipe,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
