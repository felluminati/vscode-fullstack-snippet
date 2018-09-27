const Sequelize = require('sequelize');
const db = require('../db');

const Cat = db.define('cat', {
  color: {
    type: Sequelize.STRING,
  },
  favFood: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  new: {
    type: Sequelize.THING,
    allowNull: false,
    validate: stuff,
  },
});

module.exports = Cat;
