const blogposts = [
  {
    title: 'Where two linked lists intersect?',
    content:
      'Solving data structure problems may be tough for a beginner. You look at the problem and a question arises: where do I start? Recently I was solving a problem of finding an intersection of two linked lists. After analyzing the problem I came up with a solution, which I explain below.',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/02/27/19/52/the-intersection-652694_1280.jpg',
    contentPar2:"Your task is to write a program to find the node at which the intersection of two singly linked lists begins. You may not modify original input (assume there is no cycle in the list).", 
    contentPar3:"One possible solution is to go over first list and remember all nodes you visited. You can use Set() structure to store nodes as you visit them. Then, go over the second list and for every node, check if it is in the set. If the check is positive, this is the beginning of lists intersection.",
    imageUrlAdditional1:'./img/blog4.jpg', 
    tag:['javascript', 'linkedlists', 'datastructures']
  },
  {
    title: 'Coding challenges: tree traversal.',
    content: 'Traversing (or walking) a tree is defined as visiting all nodes of a tree and performing an operation at each node. Since a tree is a complex data structure how should we do that? Should we start from the top of the tree or from the bottom? From the left or the right side? The most common approaches that are used to visit all the nodes in a tree are in-order, pre-order, and post-order. In the following sections, I will explain these three types of tree traversals: - in-order, - pre-order, - post-order.',
    contentPar2:"To implement in-order traversal, we visit all the nodes of a tree in ascending order (from the smallest node to largest). An example of a task where you can use in-order traversal would be to print a binary search tree values.", 
    contentPar3:"A pre-order traversal visits the node prior to its descendants. If you know you need to explore the parents before inspecting any children, you pick pre-order because you will encounter all the parents before all of the children.", 
    contentPar4:"A post-order traversal visits the node after it visits its descendants.",
    contentPar5:"Follow the link to see the implementation: https://github.com/kwegorek/tech/blob/master/binary_tree_traversal", 
    imageUrlAdditional1:'./img/blog4.jpg', 
    imageUrl: 'https://cdn.pixabay.com/photo/2018/11/17/22/15/tree-3822149_1280.jpg',
    tag:['javascript', 'linkedlists', 'datastructures']
  },
  {
    title: 'VSC extensions facilitating your work.',
    content:
      'Working on a project is itself a complex. VSC Extensions are very helpful and are facilitating your projects.  In order to use commands that are coming with your extensions you should use command line that comes up with VSC. Use keyboard shortcut [command]+ [left shift] + [P].',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/01/26/21/57/computer-4796017_1280.jpg',
    tag:['javascript', 'linkedlists', 'visualstudiocode']
  },
  {
    title: 'Coding challenges: find a needle in a haystack.',
    tag: ['javascript', 'datastructures'],
    content: 'Coding languages [...]',
    imageUrl: 'https://cdn.pixabay.com/photo/2014/07/09/22/46/dried-grass-388660_1280.jpg',
  },
  {
    title: 'Coding languages: Finding the shortest path.',
    tag: ['javascript', 'datastructures'],
    content:
      'Working on a project is itself a complex. VSC Extensions are very helpful and are facilitating your projects.  In order to use commands that are coming with your extensions you should use command line that comes up with VSC. Use keyboard shortcut [command]+ [left shift] + [P].',
    imageUrl: 'https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg',
    
  },
  {
    title: 'Location and internationalization in React app.',
    content: 'Coding languages [...]',
    tag: ['javascript'],
    imageUrl: 'https://cdn.pixabay.com/photo/2020/02/25/05/03/web-4877960_1280.jpg',
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
