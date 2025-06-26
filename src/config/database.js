const mysql = require('mysql2/promise');


const connected = mysql.createPool({
    'host': 'localhost',
    'port': 3307,
    'user': 'root'  ,
    'password' : '123456',
    'database': 'QLSV',
})

module.exports = connected;