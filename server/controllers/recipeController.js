const db = require('../database/dbmodel');

const recipeController = {};

recipeController.getAllRecipes = async (req, res, next) => {
  const recipes = await db.find();
  console.log('got recipes')
  res.locals.recipes = recipes;
  return next();
}

module.exports = recipeController;