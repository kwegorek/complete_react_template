// apiRoutes/blogposts.js
const router = require('express').Router()
const {UserInteraction} = require('../db/index')

router.get('/', async function(req, res, next) {
  try {
    const interactions = await UserInteraction.findAll()


    res.json(interactions)
  } catch (error) {
    next(error)
  }
})
// matches POST requests to /api/blogposts/
router.put('/', async function(req, res, next) {

    console.log( req.body, 'req.body.newLikesCount*****************------------------------->')
    try {
    
    //   console.log( newLikesNumber, ' newLikesNumber')

        const prevLikes = await UserInteraction.findByPk(1); 

    
        const updatedLikes = await prevLikes.update({likes:req.body.likes})
       
        res.json(updatedLikes)
      } catch (err) {
        next(err)
      }
    })


    module.exports = router
