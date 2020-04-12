const {db} = require('./db/index')
const {User, BlogPost, ENTranslate, PLTranslate, DETranslate, UserInteraction} = require('./db/index')
const {users, blogposts, pl, en, de, interactions} = require('./dummyData')

async function seed() {
  await db.sync({force:true})
  console.log('db synced!')

  const usersSeed = await Promise.all(users.map(user => User.create(user)))
  console.log(`seeded ${usersSeed.length} users`)

  const blogpostsSeed = await Promise.all(blogposts.map(blogpost => BlogPost.create(blogpost)))
  console.log(`seeded ${blogpostsSeed.length} posts`)

  const pltranslationSeed = await Promise.all(pl.map(translation => PLTranslate.create(translation)))
  console.log(`seeded ${pltranslationSeed.length} pltranslationSeed`)

  const entranslationSeed = await Promise.all(en.map(translation => ENTranslate.create(translation)))
  console.log(`seeded ${entranslationSeed.length} entranslationSeed`)

  const detranslationSeed = await Promise.all(de.map(translation => DETranslate.create(translation)))
  console.log(`seeded ${detranslationSeed.length} detranslationSeed`)


  const userInteractionSeed = await Promise.all(de.map(userinteraction=> UserInteraction.create(userinteraction)))
  console.log(`seeded ${userInteractionSeed.length} userinteractionSeed`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}


// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed