const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

// get all lists
router.get("/", listController.getLists, (req, res) => {
  res.status(200).json(res.locals.lists);
});

module.exports = router;