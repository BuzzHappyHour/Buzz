const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./db');
const app = express();

var port = process.env.PORT;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

//making a starter Node.js HTTP server for deploying via Heroku
app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Heiii guys')
})

app.listen(port, function() {
  console.log('listening on port' + port);
});

//this is a small test change to trigger the creation of a review app
//another comment to trigger review app