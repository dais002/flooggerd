import React from "react";

function Recipe({ recipe }) {
  console.log("in recipe");
  return (
    <button className="recipe-card">
      <h3>{(recipe.name && recipe.name) || "placeholder"}</h3>
      <img src="https://via.placeholder.com/280x160.png" />
      <h4>{recipe.type && recipe.type}</h4>
      <p>{(recipe.time && recipe.time) || "placeholder"}</p>
    </button>
  );
}

export default Recipe;
