// apiRoutes/blogposts.js
const router = require('express').Router()
const {User, BlogPost, PLTranslate, ENTranslate,DETranslate} = require('../db/index')

router.get('/', async function(req, res, next) {
  try {
    const blogPosts = await BlogPost.findAll()
    const pl = await PLTranslate.findAll()
    const de = await DETranslate.findAll()
    const en = await ENTranslate.findAll()

    res.json( en)
  } catch (error) {
    next(error)
  }
})
// matches POST requests to /api/blogposts/
router.post('/', async function(req, res, next) {
    try {
      console.log(req.body, 'req.body')
        const newPost = await BlogPost.create(req.body)
        res.json(newPost)
      } catch (err) {
        next(err)
      }
    })

// matches PUT requests to /api/blogpostss/:blogpostsId
router.put('/:blogpostId', async function(req, res, next) {
    try {
        const prevPost = await BlogPost.findByPk(req.params.blogpostId)
        const updatedPost = await prevPost.update(req.body)
        res.json(prevPost)
      } catch (err) {
        next(err)
      }
})
// matches DELETE requests to /api/blogposts/:blogpostsId
router.delete('/:blogpostId', async function(req, res, next) {
  /* etc */
  try {
    const postToDelete = await BlogPost.findByPk(req.params.id)
    await postToDelete.destroy()
    res.json('Item successfully removed.')
  } catch (err) {
    next(err)
  }
})

module.exports = router
