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


const UserInteraction = db.define('userinteraction', {
  likes: {type: DataTypes.INTEGER, defaultValue: 1},
})

const BlogPost = db.define('blogpost', {
  title: {type: DataTypes.STRING},
  content: {type: DataTypes.TEXT},
  contentPar2: {type: DataTypes.TEXT},
  contentPar3: {type: DataTypes.TEXT},
  contentPar4: {type: DataTypes.TEXT},
  contentPar5: {type: DataTypes.TEXT},
  contentPar6: {type: DataTypes.TEXT},
  contentPar7: {type: DataTypes.TEXT},
  contentPar8: {type: DataTypes.TEXT},
  edited: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: './img/milky-way-2695569_640.jpg',
  },
  tag: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['all'],
  },
  imageUrlAdditional1: {
    type: Sequelize.STRING,
  },
  imageUrlAdditional2: {
    type: Sequelize.STRING,
  },
  imageUrlAdditional3: {
    type: Sequelize.STRING,
  },
  imageUrlAdditional4: {
    type: Sequelize.STRING,
  },
})


const PLTranslate = db.define('pl', {
  navaBar: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['HOME', 'O MNIE','PROJEKTY' , 'KONTAKT', 'BLOG'],
  },
  media: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Linkedin', 'Medium', 'GitHub'],
  },
  btnContact: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Kontakt'],
  },
  textHome: {
    type: DataTypes.TEXT,
    defaultValue:
      'Fullstack web developer z doświadczeniem w tworzeniu aplikacji.',
  },
  about: {
    type: DataTypes.TEXT,
    defaultValue:
      'Prawniczka z praktyką i wykształceniem uzyskanym w Europie. Absolwentka Fullstack Academy w Nowym Jorku. Interesują mnie nowe technologie i doskonalnie w sztuce programowania.',
  },
  aboutStory: {
    type: DataTypes.TEXT,
    defaultValue:
      'W młodości zakochałam się w żeglarstwie. Żeglowałam po Europie, zarówno po jeziorach, jak i morzach. Moją ulubioną wycieczką była 7-dniowa wycieczka między chorwackimi wyspami, gdzie każdą noc spędzałam na innej wyspie. Moją następną przygodą będzie żeglowanie przez wyspy Karaibów i Tajlandii.',
  },
  aboutStoryFavouriteApp: {
    type: DataTypes.TEXT,
    defaultValue:
      'Many companies offer online applications that are used by millions of people worldwide, and my favourite one is G Suite. G Suite advanced applications provide business professionals as well as non-professionals with a complete cloud-computing solution. As a software engineer I am fascinated by the simplicity of the UI and comprehensive features. From a user perspective I see the value in the integration of G Suite. If technology is meant to make our daily tasks easier, G Suite is one that really love using.',
  },

  backBtn: {type: DataTypes.TEXT, defaultValue: 'GO BACK TO HOMEPAGE'},
  projectsDesc: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [
      'Aplikacja śledząca ruch między danymi punktami. TrafficTracker pokazuje natężnie ruchu drogowego i pomaga skrócić czas dojazdu do miejsca docelowego. Zbiera dane o ruchu w czasie rzeczywistym między danymi punktami i przedstawia ich zmiany w dłuższej perspektywie.',
      'Sklep internetowy z zaimplementowanym koszykiem oraz kontem użytkownika. Projekt stworzony przy użyciu React, JavaScript oraz PostgreSQL.',
      'Virtual Reality Escape Room, zaimplementowany przy użyciu React360. Doświadczenie VR, w którym gracz musi znaleźć wskazówki, aby rozwiązać zagadki i uciec z pokoju.',
    ],
  },
  videCapstone: {
    type: DataTypes.STRING,
    defaultValue:
      'https://www.youtube.com/watch?v=E8WMadYn2Fg&list=PLx0iOsdUOUmnTCO5wLzNNeaLbbZLlngp6&index=3&t=76s',
  },

  projectsTitle: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Traffic Tracker', 'GraceShopper', 'VR Escape Room'],
  },

  project: {
    type: Sequelize.STRING,
    defaultValue: 'Projekty',
  },

  contact: {
    type: Sequelize.STRING,
    defaultValue: 'Kontakt',
  },

  contactText: {
    type: Sequelize.STRING,
    defaultValue: 'Pytania? Proszę o kontakt',
  },

  send: {
    type: Sequelize.STRING,
    defaultValue: 'Wyślij',
  },

  name: {
    type: Sequelize.STRING,
    defaultValue: 'Imię',
  },

  email: {
    type: Sequelize.STRING,
    defaultValue: 'Adres email',
  },

  message: {
    type: Sequelize.STRING,
    defaultValue: 'Tekst wiadomości',
  },

  postPost: {
    type: Sequelize.STRING,
    defaultValue: 'Dodaj artykuł',
  },

  getPreview: {
    type: Sequelize.STRING,
    defaultValue: 'Pokaż podgląd',
  },

  post: {
    type: Sequelize.STRING,
    defaultValue: 'Artykuł',
  },

  searchByTag: {
    type: Sequelize.STRING,
    defaultValue: 'Wyszukaj wg. tagu np. javascript',
  },

  addTag: {
    type: Sequelize.STRING,
    defaultValue: 'Dodaj tag',
  },

  addComment: {
    type: Sequelize.STRING,
    defaultValue: 'Dodaj komentarz',
  },
  iframe: {
    type: Sequelize.STRING,
    defaultValue: 'https://repl.it/@KwNy/jsblog',
  },






  skilles:{type: Sequelize.ARRAY(Sequelize.STRING),
  defaultValue: [
    'JavaScript',
    'HTML/CSS',
    'React',
    'Redux',
    'Express',
    'Sequelize',
    'SQL',
    'PostgreSQL',
    'Git, GitHub',
    'BASH',
    'Knowledgeable:', 
    'Python']}


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
  textHome: {
    type: DataTypes.TEXT,
    defaultValue:
      'Full stack web developer with experience in building application with JavaScript tech stack.',
  },
  about: {
    type: DataTypes.TEXT,
    defaultValue:
      'Former law specialist with education and practice obtained in Europe. Transitioned to professional software engineering after starting it as a hobby. Fascinated by technology consistently making learning easier, enjoys exploring new techniques in software development and imparting the experience to others',
  },
  aboutStory: {
    type: DataTypes.TEXT,
    defaultValue:
      'In my teenage years I fell in love with sailing. After a trip through a famous lake near my hometown I eagerly gained a skipper license thereafter. I sailed in Europe, both lakes and seas. My favourite excursion was a 7-day trip between Croatian islands where I spent each night on a different island. My next adventure will be to sail through the Caribbean and Thailand islands.',
  },
  aboutStoryFavouriteApp: {
    type: DataTypes.TEXT,
    defaultValue:
      'Many companies offer online applications that are used by millions of people worldwide, and my favourite one is G Suite. G Suite advanced applications provide business professionals as well as non-professionals with a complete cloud-computing solution. As a software engineer I am fascinated by the simplicity of the UI and comprehensive features. From a user perspective I see the value in the integration of G Suite. If technology is meant to make our daily tasks easier, G Suite is one that really love using.',
  },

  backBtn: {type: DataTypes.TEXT, defaultValue: 'GO BACK TO HOMEPAGE'},
  projectsDesc: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [
      'Application tracking the traffic between given points. TrafficTracer visualizes traffic patterns and will help you reduce your commute time. Gathers the real-time traffic data between given points and presents how it changes over time.',
      'Online shopping site where users can ourchase cereals. Consumers are provided with a fully implemented shopping cart functionality. Project developed with React, JavaScript and relational database.',
      'Virtual Reality Escape Room, built with React360. It is a VR Experience where a player needs to find clues to solve puzzles and find his way out of the Room.',
    ],
  },
  videCapstone: {
    type: DataTypes.STRING,
    defaultValue:
      'https://www.youtube.com/watch?v=E8WMadYn2Fg&list=PLx0iOsdUOUmnTCO5wLzNNeaLbbZLlngp6&index=3&t=76s',
  },

  projectsTitle: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Traffic Tracker', 'GraceShopper', 'VR Escape Room'],
  },

  project: {
    type: Sequelize.STRING,
    defaultValue: 'Projects',
  },

  contact: {
    type: Sequelize.STRING,
    defaultValue: 'Contact',
  },

  contactText: {
    type: Sequelize.STRING,
    defaultValue: 'Do you have any questions or comments? Please, share!',
  },

  send: {
    type: Sequelize.STRING,
    defaultValue: 'Send',
  },

  name: {
    type: Sequelize.STRING,
    defaultValue: 'Name',
  },

  email: {
    type: Sequelize.STRING,
    defaultValue: 'Email',
  },

  message: {
    type: Sequelize.STRING,
    defaultValue: 'Text',
  },

  postPost: {
    type: Sequelize.STRING,
    defaultValue: 'Add Post',
  },

  getPreview: {
    type: Sequelize.STRING,
    defaultValue: 'Show Preview',
  },

  post: {
    type: Sequelize.STRING,
    defaultValue: 'Post',
  },

  searchByTag: {
    type: Sequelize.STRING,
    defaultValue: 'Search by tag eg. javascript',
  },

  addTag: {
    type: Sequelize.STRING,
    defaultValue: 'Add tag',
  },

  addComment: {
    type: Sequelize.STRING,
    defaultValue: 'Add Comment',
  },
  iframe: {
    type: Sequelize.STRING,
    defaultValue: 'https://repl.it/@KwNy/jsblog',
  },






  skilles:{type: Sequelize.ARRAY(Sequelize.STRING),
  defaultValue: [
    'JavaScript',
    'HTML/CSS',
    'React',
    'Redux',
    'Express',
    'Sequelize',
    'SQL',
    'PostgreSQL',
    'Git, GitHub',
    'BASH',
    'Knowledgeable:', 
    'Python']}


})

const DETranslate = db.define('de', {
  navaBar: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['HOME', 'ÜBER MICH', 'PROJEKTEN', 'KONTAKT', 'BLOG'],
  },
  media: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Linkedin', 'Medium', 'GitHub'],
  },
  btnContact: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Kontakt'],
  },
  textHome: {
    type: DataTypes.TEXT,
    defaultValue:
      'Full stack web developer with experience in building application with JavaScript tech stack.',
  },
  about: {
    type: DataTypes.TEXT,
    defaultValue:
      'Ehemaliger Rechtsspezialist mit der Ausbildung und die Berufspraxis in Europa. Ich habe mit dem Software-Engineering als Hobby angefangen. Danach habe ich an der Fullstack Academy in New York City professionelle IT-Ausbildung bekommen.Ich bin fasziniert von den neuen Technologien, die das Lernen erleichtern.',
  },
  aboutStory: {
    type: DataTypes.TEXT,
    defaultValue:
      'In meinen Teenagerjahren habe ich mich in das Segeln verliebt. Mein Lieblingsausflug war eine 7-tägige Reise zwischen kroatischen Inseln, wo ich jede Nacht auf einer anderen Insel verbrachte. Mein nächstes Abenteuer wird sein, durch die Karibik- und Thailand-Inseln zu segeln.',
  },
  aboutStoryFavouriteApp: {
    type: DataTypes.TEXT,
    defaultValue:
      'Many companies offer online applications that are used by millions of people worldwide, and my favourite one is G Suite. G Suite advanced applications provide business professionals as well as non-professionals with a complete cloud-computing solution. As a software engineer I am fascinated by the simplicity of the UI and comprehensive features. From a user perspective I see the value in the integration of G Suite. If technology is meant to make our daily tasks easier, G Suite is one that really love using.',
  },

  backBtn: {type: DataTypes.TEXT, defaultValue: 'HOME'},
  projectsDesc: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [
    'Die Web-App, die den Verkehr zwischen bestimmten Punkten speichert. Traffic Tracker visualisiert das Verkehrsmuster und hilft, die Pendelzeit zu verkürzen. Die App speichert die Verkehrsdaten in einer Echtzeit und zeigt wie sie sich im Laufe der Zeit ändern. ',
    'Online-Shopping-Site, mit der komplette Funktionalität. Das Projekt entwickelt mit React, JavaScript und relationaler Datenbank.',
    'Virtual Reality Escape Raum,der mit React360 gebildet wurde. Eine VR-Erfahrung, bei der man die Hinweise finden muss, um Rätsel zu lösen und den Weg aus dem Raum zu finden.'
    ],
  },
  videCapstone: {
    type: DataTypes.STRING,
    defaultValue:
      'https://www.youtube.com/watch?v=E8WMadYn2Fg&list=PLx0iOsdUOUmnTCO5wLzNNeaLbbZLlngp6&index=3&t=76s',
  },

  projectsTitle: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Traffic Tracker', 'Grace Shopper', 'VR Escape Room'],
  },

  project: {
    type: Sequelize.STRING,
    defaultValue: 'Projects',
  },

  contact: {
    type: Sequelize.STRING,
    defaultValue: 'Contact',
  },

  contactText: {
    type: Sequelize.STRING,
    defaultValue: 'Kann ich Ihnen helefen?',
  },

  send: {
    type: Sequelize.STRING,
    defaultValue: 'Senden',
  },

  name: {
    type: Sequelize.STRING,
    defaultValue: 'Name',
  },

  email: {
    type: Sequelize.STRING,
    defaultValue: 'Email',
  },

  message: {
    type: Sequelize.STRING,
    defaultValue: 'Text',
  },

  postPost: {
    type: Sequelize.STRING,
    defaultValue: 'Eine Blogartikel hinzufügen',
  },

  getPreview: {
    type: Sequelize.STRING,
    defaultValue: 'Sehe den Entwurf',
  },

  post: {
    type: Sequelize.STRING,
    defaultValue: 'Blogartikel',
  },

  searchByTag: {
    type: Sequelize.STRING,
    defaultValue: 'Suche nach Tags',
  },

  addTag: {
    type: Sequelize.STRING,
    defaultValue: 'Ein Tag hinzufügen',
  },

  addComment: {
    type: Sequelize.STRING,
    defaultValue: 'Eine Kommentar hinzufügen',
  },
  iframe: {
    type: Sequelize.STRING,
    defaultValue: 'https://repl.it/@KwNy/jsblog',
  },






  skilles:{type: Sequelize.ARRAY(Sequelize.STRING),
  defaultValue: [
    'JavaScript',
    'HTML/CSS',
    'React',
    'Redux',
    'Express',
    'Sequelize',
    'SQL',
    'PostgreSQL',
    'Git, GitHub',
    'BASH',
    'Knowledgeable:', 
    'Python']}


})


// const DETranslate = db.define('de', {
//   navaBar: {
//     type: Sequelize.ARRAY(Sequelize.STRING),
//     defaultValue: ['HOME', 'UBER MICH', 'PROJEKTEN', 'KONTAKT', 'BLOG'],
//   },
//   media: {
//     type: Sequelize.ARRAY(Sequelize.STRING),
//     defaultValue: ['Linkedin', 'Medium', 'GitHub'],
//   },
//   btnContact: {
//     type: Sequelize.STRING,
//     defaultValue: 'Contact',
//   },
//   textHome: {type: DataTypes.TEXT, defaultValue: 'Ich bin ein Freelance Web Entwickler aus NYC, mit Erfahrung in Frontend und Backend Programmierung.'},
//   about: {type: DataTypes.TEXT, defaultValue: 'Ukonczylam kurs programowania'},

//   aboutStory: {
//     type: DataTypes.TEXT,
//     defaultValue:
//       'In my teenage years I fell in love with sailing. After a trip through a famous lake near my hometown I eagerly gained a skipper license thereafter. I sailed in Europe, both lakes and seas. My favourite excursion was a 7-day trip between Croatian islands where I spent each night on a different island. My next adventure will be to sail through the Caribbean and Thailand islands.',
//   },
//   aboutStoryFavouriteApp: {
//     type: DataTypes.TEXT,
//     defaultValue:
//       'Many companies offer online applications that are used by millions of people worldwide, and my favourite one is G Suite. G Suite advanced applications that provide business professionals as well as non-professionals with a complete cloud-computing solution. G Suite offers solutions that handle video conferencing, group messaging, file storage, file sharing and real-time collaboration for working with data, documents, and files.As a SE I am fascinated by the simplicity of the UI and comprehensive features offered by G Suite. From a user perspective I see the value in the integration of G Suite solutions. Having all applications for managing email , storage, documents and other tasks is making everyday life easier. As a user I do not need to spend time searching, updating or synchronising different applications. All functionalities are coming for free. If technology is meant to change our lives for better, I feel like there is not a better app to love.',
//   },
//   backBtn: {type: DataTypes.TEXT, defaultValue: 'WROC DO STRONY GLOWNEJ'},
//   projectsDesc: {
//     type: Sequelize.ARRAY(Sequelize.TEXT),
//     defaultValue: [
//       'tt Aplikacja pozwala sledzic',
//       'Sklep internetowu',
//       'Gra VR',
//     ],
//   },
//   videCapstone: {
//     type: DataTypes.STRING,
//     defaultValue:
//       'https://www.youtube.com/watch?v=E8WMadYn2Fg&list=PLx0iOsdUOUmnTCO5wLzNNeaLbbZLlngp6&index=3&t=76s',
//   },

//   projectsTitle: {
//     type: Sequelize.ARRAY(Sequelize.STRING),
//     defaultValue: ['Traffic Tracker', 'Sklep internetowy', 'Gra Exit VR'],
//   },

//   project: {
//     type: Sequelize.STRING,
//     defaultValue: 'Projekty',
//   },

//   contact: {
//     type: Sequelize.STRING,
//     defaultValue: 'Kontakt',
//   },

//   contactText: {
//     type: Sequelize.STRING,
//     defaultValue: 'Masz pytania. Napisz',
//   },

//   send: {
//     type: Sequelize.STRING,
//     defaultValue: 'Wyslij',
//   },

//   name: {
//     type: Sequelize.STRING,
//     defaultValue: 'Imie',
//   },

//   email: {
//     type: Sequelize.STRING,
//     defaultValue: 'Email',
//   },

//   message: {
//     type: Sequelize.STRING,
//     defaultValue: 'Wiadomosc',
//   },
// })

module.exports = {db, User, BlogPost, DETranslate, ENTranslate, PLTranslate,UserInteraction}
