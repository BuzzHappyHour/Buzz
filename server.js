const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/client', express.static(__dirname + '/client'));
app.use('/', express.static(__dirname + '/client'));

app.get('/bars', db.getAllBars);
app.get('/Tenderloin', (req, res)=>db.getAttributes(req, res, 1));
app.get('/SOMA', (req, res)=>db.getAttributes(req, res, 2));
app.get('/Hayes%20Valley', (req, res) => db.getAttributes(req, res, 3));
app.get('/Union%20Square/FiDi', (req, res) => db.getAttributes(req, res, 4));
app.get('/categories', db.getAllCategories);
app.get('/attributes', (req, res)=>db.getAttributes(req, res, 2));

app.post('/signup', db.postUsers);
app.post('/login', db.checkUser);

app.post('/adduserfave', db.addToUserFavs);
app.post('/getuserfaves', db.getUserFaves);

app.listen(port, function() {
  console.log('listening on port ' + port);
});
