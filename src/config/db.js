const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Testudine',
    waitForConnections: true
});


module.exports = db;