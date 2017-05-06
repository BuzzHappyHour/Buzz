var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'buzz'
});

var getAllBars = function(cb) {
  connection.query('SELECT * FROM bars', function(err, result){
    if(err){
      cb(err, null);
    }
    cb(null, result);
  });
};





module.exports = connection;
module.exports.getAllBars = getAllBars;
