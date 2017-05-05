var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'mockup'
});

var getAllTenders = function(cb) {
  connection.query('SELECT * FROM tenderperson', function(err, result){
    cb(result);
  });
};





module.exports = connection;
module.exports.getAllTenders = getAllTenders;