const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_compleet",
  password: ""
});

//module.exports = pool.promise();
