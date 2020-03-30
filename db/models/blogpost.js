const db = require('../index/db'); 
const {
    Sequelize,
    Model,
    DataTypes
  } = require("sequelize");
  
const Blogpost = db.define("blogpost", {
    title: DataTypes.TEXT,
    content:DataTypes.TEXT,
    dataDate: {
        type: DataTypes.DATE, 
      },
  });

  module.exports = Blogpost