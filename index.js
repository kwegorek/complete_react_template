const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000


//--------------------->Body parser <---------------------//

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//--------------------->Loggin middleware morgan https://github.com/expressjs/morgan  <---------------------//
const morgan = require('morgan');
app.use(morgan('dev'));

//--------------------->Public <---------------------//
//https://expressjs.com/en/starter/static-files.html
//browser needs to request static assets from server, javascript files, css files, and images will be served from publi folder
// the path that you provide to the express.static function is relative to the directory from where you launch 
// your node process. If you run the express app from another directory, 
// it’s safer to use the absolute path of the directory that you want to serve

app.use('/static', express.static(path.join(__dirname, 'public')))

// API routes are prefixed with /api/ - 
// this is purely done to namespace them away from your "front-end routes" (such as those created by react-router).
app.use('/api', require('./apiRoutes')); // matches all requests to /api

//handle 505
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
// Because we generally want to build single-page applications (or SPAs), 
// our server should send its index.html for any requests that don't match one of our API routes


app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})



//--------------------->Setting up server<--------------------- //
// process.env.PORT  
const startListening = () => {
  const server = app.listen(process.env.PORT || PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  )
}

startListening()