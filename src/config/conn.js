import mysql from 'mysql2';
import dotenv from 'dotenv';
import {Sequelize} from 'sequelize';

dotenv.config();

export const sequelize = new Sequelize({
  dialect: 'mariadb',
  host: process.env.HOST,
  database: process.env.DB,
  username: process.env.DBUSER,
  // password: process.env.DBPASS,
  port: process.env.DBPORT,
  pool: {max:10, min:0}
});

export const queryInterface = sequelize.getQueryInterface();

export const dbConnect = () => {
  sequelize.authenticate()
    .then(()=> console.log('Se estableció la conexión'))
    .catch((err)=> console.error('No se puede conectar',err))
}



// SIN SEQUELIZE
/*Se crea el pool de conexiones*/
// const pool = mysql.createPool({
//   host: process.env.HOST ,
//   user: process.env.USER,
//   password: process.env.DBPASS,
//   database: process.env.DB,
//   waitForConnections: true,
//   port: process.env.PORTDB,
//   connectionLimit: 10,
//   queueLimit: 0,
// });


// /* Testeo de conexión */

// pool.getConnection((error, connection) => {
//   if(error){
//     console.error('Error de conexión a la base de datos',error);
//   } else {
//     console.log('Conexión exitosa a la base de datos');
//     connection.release();
//   }
// })

// // Exportamos la conexión como una promesa

// module.exports = {
//   conn: pool.promise()
// }