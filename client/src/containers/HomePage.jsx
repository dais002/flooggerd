import React, { useState, useContext, useEffect, useRef } from "react";
import RecipeCard from "../components/RecipeCard.jsx";
import { RecipeContext } from "../context/RecipeContext.jsx";
import AddRecipe from "../components/AddRecipe.jsx";

function HomePage() {
  console.log("in home page");
  const { state } = useContext(RecipeContext);
  const [displayRecipes, setDisplayRecipes] = useState([]);

  // load recipes on page load and updates
  useEffect(() => {
    console.log("useeffect setdisplay homepage", state);
    setDisplayRecipes(state);
  }, [state]);

  // search bar filtering on each keystroke
  const searchFilter = (event) => {
    event.preventDefault();
    const searchText = event.target.value;
    const copy = [...state];
    const searchResult = copy.filter((recipe) => {
      let output = [];

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
      output = [];
      if (values.includes(searchText)) return recipe;
    });
    setDisplayRecipes(searchResult);
  };

  // use modal reference
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

  const recipeList = displayRecipes.map((recipe, idx) => {
    return <RecipeCard key={idx} recipe={recipe} />;
  });

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
      <div className="recipes-list">{recipeList}</div>
    </div>
  );
}

export default HomePage;
