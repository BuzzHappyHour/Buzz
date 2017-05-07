var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'buzz'
});

var getAllBars = function(cb, hood) {
  var query = `select * from bars inner join neighborhoods where neighborhoods.name = "${hood}" and neighborhoods.id = bars.neighborhood`;
  connection.query(query, function(err, result) {
    cb(result);
  });
};





module.exports = connection;
module.exports.getAllBars = getAllBars;