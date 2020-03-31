const db = require('../index/db'); 
const {
    Sequelize,
    Model,
    DataTypes
  } = require("sequelize");
  
const Blogpost = db.define("blogpost", {
    title: DataTypes.STRING,
    content:DataTypes.TEXT,
    edited: { 
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.NOW
   }
  });

  module.exports = Blogpost