var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'mockup'
});

connection.connect();

module.exports = connection;