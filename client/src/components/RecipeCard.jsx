import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe._id}`} className="recipe-card">
      <button>
        <h3>{(recipe.name && recipe.name) || "placeholder"}</h3>
        <img src="https://via.placeholder.com/280x160.png" />
        <h4>{recipe.type && recipe.type}</h4>
        <p>{(recipe.time && recipe.time) || "placeholder"}</p>
      </button>
    </Link>
  );
}

export default RecipeCard;
