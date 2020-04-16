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
router.post(
  "/",
  recipeController.addRecipe,
  recipeController.getAllRecipes,
  (req, res) => {
    res.status(200).json(res.locals.recipes);
  }
);

// updating recipe

// deleting recipe

module.exports = router;
