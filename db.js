var mysql = require('mysql')
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  database: "mynew_db"
  });

connection.connect()

module.exports = connection;
