const express = require( 'express' );
const app = express();

app.listen(3000, () => console.log('Twitter app listening for tweets on port 3000'));

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
})

app.get('/', (req, res) => res.send('I am responding'));
