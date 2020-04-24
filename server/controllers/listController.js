const { List } = require("../database/dbModel");

const listController = {};

listController.getLists = async (req, res, next) => {
  const data = await List.find();
  res.locals.lists = data;
  return next();
};

module.exports = listController;
