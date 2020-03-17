// apiRoutes/puppies.js
const router = require('express').Router();
// Express supports methods that correspond to all HTTP request methods: get, post, and so on

// matches GET requests to /api/puppies/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/puppies/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/puppies/:puppyId
router.put('/:blogpostId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/puppies/:puppyId
router.delete('/:blogpostId', function (req, res, next) { /* etc */});

module.exports = router;