const express = require( 'express' );
const app = express();

app.listen(3000, () => console.log('Twitter app listening for tweets on port 3000'));

app.get('/', (request, response) => response.send('I am responding'));

app.use('/*', function (req, res, next) {
  console.log("words")
  next()
})
