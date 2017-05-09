var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/buzz' || 'postgres://fizlcsqhnhfnkh:d715b80ade298300b1a14fb79aa80bbb87130bcdd9a5156607b56257536adfb2@ec2-54-83-49-44.compute-1.amazonaws.com:5432/d8gbgdpdgg12db';
var db = pgp(connectionString);

getAllBars = function(req, res, next) {
  db.query('select * from bars')
    .then(function(data) {
      res.status(200)
        .json({
          status: 'success',
          data: data
        });
    });
};

getNeighborhoodBars = function(req, res, neighborhood) {
  db.query(`SELECT bars.name, bars.location, bars.category FROM bars INNER JOIN neighborhoods ON (neighborhoods.name = '${neighborhood}') and (neighborhoods.id = bars.neighborhood)`)
    .then(function(data) {
      res.status(200).send(data);
    });
};

// getNeighborhoodBars = function(req, res, neighborhood) {
//   db.query(`SELECT bars.name, bars.location, bars.category FROM bars INNER JOIN neighborhoods ON (neighborhoods.name = '${neighborhood}') and (neighborhoods.id = bars.neighborhood)`)
//     .then(function(data) {
//       res.status(200).send(data);
//     });
// };

getAttributes = function(req, res, id) {
  db.query(`SELECT attributes.attribute, bars.category, bars.location, bars.hhstart, bars.hhend, bars.name FROM attributes INNER JOIN bars_attributes ON attributes.id = bars_attributes.attribute_id INNER JOIN bars ON bars.id = bars_attributes.bar_id AND bars.neighborhood = ${id}`)
    .then(function(data) {
      res.status(200).send(data);
    });
};




// getNeighborhoodBars = function(req, res, neighborhood, category, id) {
//   db.query(`SELECT bars.name, bars.location, bars.category FROM bars INNER JOIN neighborhoods ON (neighborhoods.name = '${neighborhood}') and (neighborhoods.id = bars.neighborhood) INNER JOIN categories ON (categories.id = bars.category) and (categories.id = 3)
// `)
//     .then(function(data) {
//       res.status(200).send(data);
//     });
// };


getAllCategories = function(req, res, next) {
  db.query('select * from categories')
    .then(function(data) {
      res.status(200).send(data);
    });
};








// module.exports = connection;
module.exports.getAllBars = getAllBars;
module.exports.getNeighborhoodBars = getNeighborhoodBars;
module.exports.getAllCategories = getAllCategories;
module.exports.getAttributes = getAttributes;
