const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  database: "pensee",
  host: '188.166.50.188',
  multipleStatements: true,
  password: "12345678",
  user: "pensee"
});

module.exports.pool = pool;