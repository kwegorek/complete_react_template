const db = require('../index/db'); 
const {
    Sequelize,
    Model,
    DataTypes
  } = require("sequelize");
  
const Blogpost = db.define("blogpost", {
    title: {type:DataTypes.STRING
    },
    content:{type:DataTypes.TEXT
    },
    edited: { 
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.NOW
   }, 
   imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://unsplash.com/photos/oI6zrBj3nKw'
  },
  tag: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['all']
  },
  });

  module.exports = Blogpost