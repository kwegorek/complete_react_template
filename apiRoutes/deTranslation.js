const router = require('express').Router()
const {DETranslate} = require('../db/index')

router.get('/', async function (req, res, next) {
  try {
    const dn = await DETranslate.findAll()

    res.json(dn)
  } catch (error) {
    next(error)
  }
})


// module.exports = router