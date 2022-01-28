const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');

router.get('/', (req, res) => {
  recipeController.getRecipes(req, res);
});

module.exports = router;
