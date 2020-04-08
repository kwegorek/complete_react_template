const router = require('express').Router()
const {PLTranslate} = require('../db/index')

router.get('/', async function(req, res, next) {
  try {

    const pl = await PLTranslate.findAll()

    res.json(pl)
  } catch (error) {
    next(error)
  }
})


// module.exports = router