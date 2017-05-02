const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./db');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

//making a starter Node.js HTTP server for deploying via Heroku
app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Heiii guys')
})


app.listen(3000, function() {
  console.log('listening on port 3000');
});