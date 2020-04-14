import React, { useState, useContext, useEffect, useRef } from "react";
import Recipes from "../components/Recipes.jsx";
import { RecipeContext } from "../RecipeContext.jsx";
import DummyData from "../playground/DummyData.jsx";
import AddRecipe from "../components/AddRecipe.jsx";

function HomePage() {
  const recipes = useContext(RecipeContext);
  console.log("in recipes page");
  const [displayRecipes, setDisplayRecipes] = useState([]);

  useEffect(() => {
    console.log("in useeffect");
    setDisplayRecipes([...recipes, ...DummyData]);
  }, [recipes]);

  const searchFilter = (event) => {
    event.preventDefault();
    const searchText = event.target.value;
    const dummyData = [...recipes, ...DummyData];
    const filteredRecipes = dummyData.filter((recipe) => {
      let output = [];
      let result;

      // recursive function to parse through recipe object
      function getValues(input) {
        for (let key in input) {
          if (key === "ingredients") output.push(...Object.keys(input[key]));
          if (typeof input[key] === "object") {
            getValues(input[key]);
          } else {
            output.push(input[key]);
          }
        }
        return output;
      }

      const values = getValues(recipe).join(" ");
      if (values.includes(searchText)) result = true;
      output = [];
      if (result) return recipe;
    });
    setDisplayRecipes(filteredRecipes);
  };

  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="recipes-container">
      <h2>What do you feel like making today?</h2>
      <div className="search-container">
        <form className="searchbar">
          <input
            className="searchbar-input"
            type="text"
            placeholder="Search Recipes..."
            onChange={searchFilter}
          />
        </form>
        <button className="add-recipe" onClick={openModal}>
          Add Recipe
        </button>
        <AddRecipe ref={modalRef} />
      </div>
      <Recipes displayRecipes={displayRecipes} />
    </div>
  );
}

export default HomePage;
