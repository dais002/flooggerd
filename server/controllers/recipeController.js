const db = require("../database/dbmodel");

const recipeController = {};

recipeController.getAllRecipes = async (req, res, next) => {
  const recipes = await db.find();
  res.locals.recipes = recipes;
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
  const newRecipe = await db
    .create({
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
  await db
    .deleteOne({
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
