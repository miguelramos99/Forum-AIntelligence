var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit:10,
  host: "remotemysql.com",
  user: "crVcHYRlz8",
  password: "krvrEU10KL",
  database: 'crVcHYRlz8'
});

module.exports.pool = pool;