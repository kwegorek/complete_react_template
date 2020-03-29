// apiRoutes/blogposts.js
const router = require('express').Router();
// Express supports methods that correspond to all HTTP request methods: get, post, and so on

// matches GET requests to /api/blogposts/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/blogposts/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/blogpostss/:blogpostsId
router.put('/:blogpostId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/blogposts/:blogpostsId
router.delete('/:blogpostId', function (req, res, next) { /* etc */});

module.exports = router;
