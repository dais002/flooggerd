import React, { useState } from "react";
import RecipesSearch from "../components/RecipesSearch.jsx";
import Recipes from "../components/Recipes.jsx";

function RecipesPage() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="recipes-container">
      <h1>Recipes Container</h1>
      <RecipesSearch />
      <Recipes />
    </div>
  );
}

export default RecipesPage;
