const { Recipe } = require("../database/dbModel");

const recipeController = {};

recipeController.getAllRecipes = async (req, res, next) => {
  const recipeList = await Recipe.find();
  res.locals.recipes = recipeList;
  return next();
};

recipeController.addRecipe = async (req, res, next) => {
  const {
    name,
    type,
    cuisine,
    instructions,
    ingredients,
    time,
    notes,
  } = req.body;
  const newRecipe = await Recipe.create({
    name,
    type,
    cuisine,
    instructions,
    ingredients,
    time,
    notes,
  })
    .then((recipe) => {
      console.log("recipe created");
      res.locals.recipe = recipe;
      return next();
    })
    .catch((err) => {
      console.log("didnt post", err);
      return next(err);
    });
};

recipeController.deleteRecipe = async (req, res, next) => {
  const { id } = req.params;
  await Recipe.deleteOne({
    _id: id,
  })
    .then((res) => {
      console.log("deleted from server");
      return next();
    })
    .catch((err) => {
      console.log("didnt delete", err);
      return next(err);
    });
};

module.exports = recipeController;
