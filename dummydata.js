const blogposts = [
  {
    title: 'Where two linked lists intersect?',
    content:
      'Solving data structure problems may be tough for a beginner. You look at the problem and a question arises: where do I start? Recently I was solving a problem of finding an intersection of two linked lists. After analyzing the problem I came up with a solution, which I explain below.',
    imageUrl: './img/blog1.jpg',
    contentPar2:"Your task is to write a program to find the node at which the intersection of two singly linked lists begins. You may not modify original input (assume there is no cycle in the list).", 
    contentPar3:"One possible solution is to go over first list and remember all nodes you visited. You can use Set() structure to store nodes as you visit them. Then, go over the second list and for every node, check if it is in the set. If the check is positive, this is the beginning of lists intersection.",
    imageUrlAdditional1:'./img/blog4.jpg', 
    tag:['javascript', 'linkedlists', 'datastructures']
  },
  {
    title: 'Coding challenges: tree traversal1',
    content: 'Coding languages [...]',
    imageUrl: './img/blog2.jpg',
    tag:['javascript', 'linkedlists', 'datastructures']
  },
  {
    title: 'VSC extensions facilitating your work',
    content:
      'Working on a project is itself a complex. VSC Extensions are very helpful and are facilitating your projects.  In order to use commands that are coming with your extensions you should use command line that comes up with VSC. Use keyboard shortcut [command]+ [left shift] + [P].',
    imageUrl: './img/blog4.jpg',
    tag:['javascript', 'linkedlists', 'visualstudiocode']
  },
  {
    title: 'Coding challenges: find a needle in a haystack',
    tag: ['javascript', 'datastructures'],
    content: 'Coding languages [...]',
    imageUrl: './img/hay-3369608_1920.jpg',
  },
  {
    title: 'Coding languages: Finding the shortest path.',
    tag: ['javascript', 'datastructures'],
    content:
      'Working on a project is itself a complex. VSC Extensions are very helpful and are facilitating your projects.  In order to use commands that are coming with your extensions you should use command line that comes up with VSC. Use keyboard shortcut [command]+ [left shift] + [P].',
    imageUrl: './img/road-1663543_1920.jpg',
    
  },
  {
    title: 'Coding challenges: tree traversal3',
    content: 'Coding languages [...]',
    tag: ['javascript'],
    imageUrl: './img/blog6.jpg',
  },
]

const users = [{name: 'Ninja'}]

const en = [
  {
    navbar: ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT', 'BLOG'],
    // media:['Linkedin', 'Medium', 'GitHub'],
    // btnContact:'Contact',
    // textHome:'Programista fullstack',
    // about:'Ukonczylam kurs programowania',
    // backBtn:'WROC DO STRONY GLOWNEJ',
    // projectsDesc:[
    //     'tt Aplikacja pozwala sledzic',
    //     'Sklep internetowu',
    //     'Gra VR',
    //   ],
    //   projectsTitle:['Traffic Tracker', 'Sklep internetowy', 'Gra Exit VR'],
    //   project:'Projekty',
    //   contact:'Kontakt',
    //   contactText:'Masz pytania. Napisz',
    //   send:'Wyslij',
    //   name:'Imie',
    //   email:'Email',
    //   message: 'Wiadomosc'
  },
]

const pl = [
  {
    navbar: ['HOME', 'ABOUT', 'PROJEKTY', 'KONTAKT', 'BLOG'],
    // media:['Linkedin', 'Medium', 'GitHub'],
    // btnContact:'Contact',
    // textHome:'Programista fullstack',
    // about:'Ukonczylam kurs programowania',
    // backBtn:'WROC DO STRONY GLOWNEJ',
    // projectsDesc:[
    //     'tt Aplikacja pozwala sledzic',
    //     'Sklep internetowu',
    //     'Gra VR',
    //   ],
    //   projectsTitle:['Traffic Tracker', 'Sklep internetowy', 'Gra Exit VR'],
    //   project:'Projekty',
    //   contact:'Kontakt',
    //   contactText:'Masz pytania. Napisz',
    //   send:'Wyslij',
    //   name:'Imie',
    //   email:'Email',
    //   message: 'Wiadomosc'
  },
]

const de = [
  {
    navbar: ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT', 'BLOG'],
    // media:['Linkedin', 'Medium', 'GitHub'],
    // btnContact:'Contact',
    // textHome:'Programista fullstack',
    // about:'Ukonczylam kurs programowania',
    // backBtn:'WROC DO STRONY GLOWNEJ',
    // projectsDesc:[
    //     'tt Aplikacja pozwala sledzic',
    //     'Sklep internetowu',
    //     'Gra VR',
    //   ],
    //   projectsTitle:['Traffic Tracker', 'Sklep internetowy', 'Gra Exit VR'],
    //   project:'Projekty',
    //   contact:'Kontakt',
    //   contactText:'Masz pytania. Napisz',
    //   send:'Wyslij',
    //   name:'Imie',
    //   email:'Email',
    //   message: 'Wiadomosc'
  },
]

let interactions = [{likes:1}]

module.exports = {blogposts, users, en, pl, de, interactions}
