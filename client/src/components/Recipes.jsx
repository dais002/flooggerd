import React from "react";
import RecipeCard from "./RecipeCard";

const Recipes = React.memo(({ displayRecipes }) => {
  console.log("in recipes component");

  const recipeList = displayRecipes.map((recipe, idx) => {
    return <RecipeCard key={idx} recipe={recipe} />;
  });

  return <div className="recipes-list">{recipeList}</div>;
});

export default Recipes;
