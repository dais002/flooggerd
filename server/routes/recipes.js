const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// getting all recipes
router.get("/", recipeController.getAllRecipes, (req, res) => {
  res.status(200).json(res.locals.recipes);
});

// getting one recipe
router.get("/:id", (req, res) => {});

// creating recipe
router.post("/", recipeController.addRecipe, (req, res) => {
  res.status(200).json(res.locals.recipe);
});

// updating recipe

// deleting recipe
router.delete("/:id", recipeController.deleteRecipe, recipeController.getAllRecipes, (req, res) => {
  res.status(200).send(res.locals.recipes);
});

module.exports = router;
