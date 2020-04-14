import React, { useState, useContext } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import { RecipeContext } from "../RecipeContext";

function Recipes() {
  console.log("in recipes component");
  const recipes = useContext(RecipeContext);

  const recipeList = recipes.map((recipe, idx) => {
    return <Recipe key={idx} recipe={recipe} />;
  });

  return <section>{recipeList}</section>;
}

export default Recipes;
