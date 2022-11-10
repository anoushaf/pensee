const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  database: "pensee",
  host: '137.184.184.246',
  multipleStatements: true,
  password: "12345678",
  user: "pensee"
});

module.exports.pool = pool;