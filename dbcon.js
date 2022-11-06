const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  database: "pensee",
  host: '10.0.0.79',
  multipleStatements: true,
  password: "12345678",
  user: "pensee"
});

module.exports.pool = pool;