const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    default: 
  }
})