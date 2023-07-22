require('dotenv').config();
const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = dbPool.promise();