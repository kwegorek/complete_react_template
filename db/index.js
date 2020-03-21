const {
  Sequelize,
  Model,
  DataTypes
} = require("sequelize");
// Option 1: Passing a connection URI
// https://sequelize.org/master/manual/getting-started.html

const sequelize = new Sequelize('postgres://localhost:5432/template_db', {
  logging: false
}) // Example for postgres

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
});

module.exports = sequelize;

