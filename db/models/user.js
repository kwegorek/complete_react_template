const Sequelize = require('sequelize')
const db = require('../index')


const User = db.define("user", {
    name: DataTypes.STRING,
    
  });



module.exports = User