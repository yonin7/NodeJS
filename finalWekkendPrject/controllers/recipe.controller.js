const User = require('../models/recipe');

const getRecipes = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  getRecipes,
};
