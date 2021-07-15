var mysql = require('mysql2');

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASS,
  database        : process.env.DB_NAME
});

pool.getConnection((err, connection)=>{
    if(err)
        throw err
    else
        connection.release();
});