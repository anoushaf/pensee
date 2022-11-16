const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  database: 'pensee',
  host: '127.0.0.1',
  multipleStatements: true,
  password: 'music22?',
  user: 'root'
});

module.exports.pool = pool;