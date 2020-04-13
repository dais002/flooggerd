const express = require('express');
const router = express.Router();

// getting all recipes
router.get('/', (req, res) => {
  res.send('hello world')
})

// getting one recipe
router.get('/:id')

// creating recipe

// updating recipe

// deleting recipe

module.exports = router;
