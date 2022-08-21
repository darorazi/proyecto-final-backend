//dotenv nos permite leer las variables de entorno de nuestro .env
const dotenv = require("dotenv");
const mysql = require('mysql');

dotenv.config();
let db;

try {
    db = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBSCHEMA
    });
} catch (error) {
    console.log("Error al conectar con la base de datos.");
}

module.exports = { db };