const Sequelize = require('sequelize')
const db = require('../index')


const User = db.define("user", {
    name: DataTypes.TEXT,
    
  });

// console.log(User, 'hello')

module.exports = User