const {
  Sequelize,
  Model,
  DataTypes
} = require("sequelize");
// Option 1: Passing a connection URI
// https://sequelize.org/master/manual/getting-started.html
// require('../db/models')
// const Blogpost = require('./models/blogpost')
// const User = require('./models/user')

// const Blogpost = require('./models/blogpost')


const db = new Sequelize('postgres://localhost:5432/template_db', {
  logging: false
}) // Example for postgres

const User = db.define("user", {
  name: DataTypes.TEXT,
  
});

const BlogPost = db.define("blogpost", {
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


module.exports =  {db, User, BlogPost}