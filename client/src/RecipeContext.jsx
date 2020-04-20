import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useReducer,
} from "react";
import axios from "axios";

export const RecipeContext = createContext();

// useReducer refactor
export const DELETE_RECIPE = "DELETE_RECIPE";
export const ADD_RECIPE = "ADD_RECIPE";
export const INITIAL = "INITIAL";

export const recipeReducer = (state, action) => {
  if (action.type == DELETE_RECIPE) {
    console.log("delete recipe reducer");
  }

  if (action.type == ADD_RECIPE) {
    return [...state, action.payload];
  }

  if (action.type == INITIAL) {
    return action.payload;
  }

  return state;
};

export const RecipeProvider = ({ children }) => {
  const [initial, setInitial] = useState([]);
  const [state, dispatch] = useReducer(recipeReducer, initial);

  useEffect(() => {
    console.log("fetching");
    axios.get("/api/recipes").then((res) => setInitial(res.data));
  }, []);

  useEffect(() => {
    console.log("dispatch initial");
    dispatch({ type: INITIAL, payload: initial });
  }, [initial]);

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
