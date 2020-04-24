const mongoose = require("mongoose");

// add recipe schema
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  instructions: {
    type: Object,
    required: true,
  },
  ingredients: {
    type: Object,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  notes: String,
});

const Recipe = mongoose.model("recipe", recipeSchema);

// shopping list and pantry schema
const listSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  list: {
    type: Number,
    required: true,
  },
  category: String,
  amount: String,
  notes: String,
});

const List = mongoose.model("list", listSchema);

module.exports = {
  Recipe,
  List,
};
