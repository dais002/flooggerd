import React, { useState, useContext } from "react";
import Recipe from "./Recipe";

function Recipes({ displayRecipes }) {
  console.log("in recipes component");

  const recipeList = displayRecipes.map((recipe, idx) => {
    return <Recipe key={idx} recipe={recipe} />;
  });

  return <div className="recipes-list">{recipeList}</div>;
}

export default Recipes;
