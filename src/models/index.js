const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

//Import models
db.car = require('./car')(sequelize, Sequelize);
db.customer = require('./customer')(sequelize,Sequelize);
db.rent= require('./rent')(sequelize,Sequelize);
db.history = require('./history')(sequelize, Sequelize);
module.exports = db;

