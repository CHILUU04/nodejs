const mysql = require('mysql2/promise');

const connected = mysql.createPool({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'Users',
    waitForConnections: true, //: cho phép chờ khi hết connection (true) hay lỗi ngay (false).  
    connectionLimit: 10, //ố connection cùng lúc tối đa.
    queueLimit: 0 //ố request tối đa được xếp hàng khi tất cả connection đều đang bận; 0 = không giới hạn.
});

module.exports = connected;
