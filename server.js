const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

app.use('/client', express.static(__dirname + '/client'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html')
});

app.get('/tenders', function(req, res){
  var query = 'SELECT * FROM tenderperson'
  db.query(query, function(err, results){
    // console.log(results);
    res.json(results);
  });
});


app.listen(1337, function() {
  console.log('listening on port 1337');
});
