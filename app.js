// console.log(process);
// научить читать файлы
// ДОКУМЕНТ 2
const mysql = require('mysql2/promise');
const config = require('./config');

let connection = mysql.createConnection(config);

if (connection) {
    console.log('work');
}

