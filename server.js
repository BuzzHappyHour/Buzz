const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./db');
const app = express();

var port = process.env.PORT || 1234;

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
  console.log('listening on port 1234');
});