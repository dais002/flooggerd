import React, { useContext, useState, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";
import axios from "axios";

function RecipePage() {
  // should pass props down to this component based on id params
  const id = window.location.pathname.slice(8);

  const [openDelete, setOpenDelete] = useState(false);
  const { state, deleteRecipe } = useContext(RecipeContext);
  const recipe = state.filter((recipe) => recipe._id == id)[0];

  // escape button to close modal
  useEffect(() => {
    console.log("inuseeffect recipepage");
    const escapeHandler = (event) => {
      if (event.keyCode === 27) {
        setOpenDelete(false);
      }
    };
    window.addEventListener("keydown", escapeHandler);
    return () => {
      window.removeEventListener("keydown", escapeHandler);
    };
  }, []);

  // parse ingredients and instructions objects for table display
  let ingredientsList;
  let instructionsList;

  if (!recipe.ingredients) {
    ingredientsList = (
      <tr>
        <td>Ingredients:</td>
        <td>No ingredients saved.</td>
      </tr>
    );
  } else {
    ingredientsList = Object.entries(recipe.ingredients).map(
      (ingredient, idx) => {
        if (idx === 0) {
          return (
            <tr key={idx}>
              <td>Ingredients:</td>
              <td>
                {ingredient[0]}: {ingredient[1]}
              </td>
            </tr>
          );
        } else {
          return (
            <tr key={idx}>
              <td></td>
              <td>
                {ingredient[0]}: {ingredient[1]}
              </td>
            </tr>
          );
        }
      }
    );
  }

  if (!recipe.instructions) {
    instructionsList = (
      <tr>
        <td>Instructions:</td>
        <td>No instructions saved.</td>
      </tr>
    );
  } else {
    instructionsList = Object.values(recipe.instructions).map(
      (instruction, idx) => {
        if (idx === 0) {
          return (
            <tr key={idx}>
              <td>Instructions:</td>
              <td>
                {idx + 1}. {instruction}
              </td>
            </tr>
          );
        } else {
          return (
            <tr key={idx}>
              <td></td>
              <td>
                {idx + 1}. {instruction}
              </td>
            </tr>
          );
        }
      }
    );
  }

  // refactor to not refetch after deleting recipe
  // filter on front end if delete is successful?
  const removeRecipe = (event) => {
    axios.delete(`/api/recipes/${id}`).then((res) => {
      console.log("response from delete recipe", res.data);
      deleteRecipe(id);
    });
  };

  return (
    <div className="recipe-page">
      <h2>{recipe.name ? recipe.name : "Individual Recipe Page"}</h2>
      <div className="recipe-overview">
        <div className="recipe-text">
          <div>
            <table>
              <tbody>
                <tr>
                  <td>Type of Food:</td>
                  <td>{recipe.type ? recipe.type : "N/A"}</td>
                </tr>
                <tr>
                  <td>Cuisine:</td>
                  <td>{recipe.cuisine ? recipe.cuisine : "N/A"}</td>
                </tr>
                <tr>
                  <td>Cooking Time:</td>
                  <td>{recipe.time ? recipe.time : "N/A"}</td>
                </tr>
                <tr>
                  <td>Notes:</td>
                  <td>{recipe.notes ? recipe.notes : "N/A"}</td>
                </tr>
                {ingredientsList}
                {instructionsList}
              </tbody>
            </table>
          </div>
          <div className="recipe-buttons">
            <Link to="/">
              <button>Back to Homepage</button>
            </Link>
            <button onClick={() => setOpenDelete(true)}>Delete Recipe</button>
            {openDelete ? (
              <div className="modal-backdrop">
                <div className="modal-box">
                  Delete Recipe?
                  <Link to="/">
                    <button onClick={removeRecipe}>Ok</button>
                  </Link>
                  <button onClick={() => setOpenDelete(false)}>Cancel</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="recipe-image-container">
          <img
            className="recipe-image"
            src="https://via.placeholder.com/400x300"
          />
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
