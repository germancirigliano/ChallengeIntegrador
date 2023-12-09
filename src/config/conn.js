import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

/*Se crea el pool de conexiones*/
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DBPASS,
  database: process.env.DB,
  port: process.env.PORTDB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


/* Testeo de conexión */

pool.getConnection((error, connection) => {
  if(error){
    console.error('Error de conexión a la base de datos',error);
  } else {
    console.log('Conexión exitosa a la base de datos');
    connection.release();
  }
})

// Exportamos la conexión como una promesa

module.exports = {
  conn: pool.promise()
}