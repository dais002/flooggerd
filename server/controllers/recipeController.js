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
      return next();
    })
    .catch((err) => {
      console.log("didnt post", err);
      return next(err);
    });
};

module.exports = recipeController;
