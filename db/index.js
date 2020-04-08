const {Sequelize, Model, DataTypes} = require('sequelize')
// Option 1: Passing a connection URI
// https://sequelize.org/master/manual/getting-started.html
// require('../db/models')
// const Blogpost = require('./models/blogpost')
// const User = require('./models/user')

// const Blogpost = require('./models/blogpost')

const db = new Sequelize('postgres://localhost:5432/template_db', {
  logging: false,
}) // Example for postgres

const User = db.define('user', {
  name: DataTypes.TEXT,
})

const BlogPost = db.define('blogpost', {
  title: {type: DataTypes.STRING},
  content: {type: DataTypes.TEXT},
  edited: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://unsplash.com/photos/oI6zrBj3nKw',
  },
  tag: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['all'],
  },
})

const PLTranslate = db.define('pl', {
  navaBar: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['HOME', 'O MNIE', 'PROJEKTY', 'KONTAKT', 'BLOG'],
  },
  media: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Linkedin', 'Medium', 'GitHub'],
  },
  btnContact: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Contact'],
  },
  textHome: {type: DataTypes.TEXT, defaultValue: 'Programista fullstack'},
  about: {type: DataTypes.TEXT, defaultValue: 'Ukonczylam kurs programowania'},
  backBtn: {type: DataTypes.TEXT, defaultValue: 'WROC DO STRONY GLOWNEJ'},
  projectsDesc: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [
      'tt Aplikacja pozwala sledzic',
      'Sklep internetowu',
      'Gra VR',
    ],
  },

  projectsTitle: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Traffic Tracker', 'Sklep internetowy', 'Gra Exit VR'],
  },

  project: {
    type: Sequelize.STRING,
    defaultValue: 'Projekty'
  },


  contact: {
    type: Sequelize.STRING,
    defaultValue: 'Kontakt'
  },

  contactText: {
    type: Sequelize.STRING,
    defaultValue: 'Masz pytania. Napisz'
  },

  send: {
    type: Sequelize.STRING,
    defaultValue: 'Wyslij'
  },

  name: {
    type: Sequelize.STRING,
    defaultValue: 'Imie'
  },

  email: {
    type: Sequelize.STRING,
    defaultValue: 'Email'
  },

  message: {
    type: Sequelize.STRING,
    defaultValue: 'Wiadomosc'
  },



})


const ENTranslate = db.define('en', {
  navaBar: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT', 'BLOG'],
  },
  media: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Linkedin', 'Medium', 'GitHub'],
  },
  btnContact: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Contact'],
  },
  textHome: {type: DataTypes.TEXT, defaultValue: 'Programista fullstack'},
  about: {type: DataTypes.TEXT, defaultValue: 'Ukonczylam kurs programowania'},
  backBtn: {type: DataTypes.TEXT, defaultValue: 'WROC DO STRONY GLOWNEJ'},
  projectsDesc: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [
      'tt Aplikacja pozwala sledzic',
      'Sklep internetowu',
      'Gra VR',
    ],
  },

  projectsTitle: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Traffic Tracker', 'Sklep internetowy', 'Gra Exit VR'],
  },

  project: {
    type: Sequelize.STRING,
    defaultValue: 'Projekty'
  },


  contact: {
    type: Sequelize.STRING,
    defaultValue: 'Kontakt'
  },

  contactText: {
    type: Sequelize.STRING,
    defaultValue: 'Masz pytania. Napisz'
  },

  send: {
    type: Sequelize.STRING,
    defaultValue: 'Wyslij'
  },

  name: {
    type: Sequelize.STRING,
    defaultValue: 'Imie'
  },

  email: {
    type: Sequelize.STRING,
    defaultValue: 'Email'
  },

  message: {
    type: Sequelize.STRING,
    defaultValue: 'Wiadomosc'
  },



})


const DETranslate = db.define('de', {
  navaBar: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['HOME', 'UBER MICH', 'PROJEKTEN', 'KONTAKT', 'BLOG'],
  },
  media: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Linkedin', 'Medium', 'GitHub'],
  },
  btnContact: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Contact'],
  },
  textHome: {type: DataTypes.TEXT, defaultValue: 'Programista fullstack'},
  about: {type: DataTypes.TEXT, defaultValue: 'Ukonczylam kurs programowania'},
  backBtn: {type: DataTypes.TEXT, defaultValue: 'WROC DO STRONY GLOWNEJ'},
  projectsDesc: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [
      'tt Aplikacja pozwala sledzic',
      'Sklep internetowu',
      'Gra VR',
    ],
  },

  projectsTitle: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Traffic Tracker', 'Sklep internetowy', 'Gra Exit VR'],
  },

  project: {
    type: Sequelize.STRING,
    defaultValue: 'Projekty'
  },


  contact: {
    type: Sequelize.STRING,
    defaultValue: 'Kontakt'
  },

  contactText: {
    type: Sequelize.STRING,
    defaultValue: 'Masz pytania. Napisz'
  },

  send: {
    type: Sequelize.STRING,
    defaultValue: 'Wyslij'
  },

  name: {
    type: Sequelize.STRING,
    defaultValue: 'Imie'
  },

  email: {
    type: Sequelize.STRING,
    defaultValue: 'Email'
  },

  message: {
    type: Sequelize.STRING,
    defaultValue: 'Wiadomosc'
  },



})

module.exports = {db, User, BlogPost, DETranslate, ENTranslate,PLTranslate }
