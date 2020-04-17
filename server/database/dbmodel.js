const mongoose = require("mongoose");

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

module.exports = mongoose.model("Recipe", recipeSchema);
