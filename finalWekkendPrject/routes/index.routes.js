const express = require('express');
const router = express.Router();
const recipeRoute = require('./recipe.route');

router.use('/', recipeRoute);

module.exports = router;
