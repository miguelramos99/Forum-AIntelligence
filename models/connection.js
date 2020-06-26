var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit:10,
  host: "db4free.net",
  user: "miguel888",
  password: "MiguelBenfica1999",
  database: "aintelligence"
});

module.exports.pool = pool;