const express = require( 'express' );
const app = express();
const nunjucks = require( 'nunjucks' );
const routes = require('./routes');
app.use('/', routes);
app.use(express.static('public'));

var locals = {
title: 'An Example',
people: [
  {name: 'Gandalf'},
  {name: 'Frodo'},
  {name: 'Hermione'}
  ]
}

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

app.listen(3000, () => console.log('Twitter app listening for tweets on port 3000'));

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

// app.get('/', function(req, res) {
//   res.render('index.html', locals, function(err, output) {
//     res.send(output);
//   });
// });
