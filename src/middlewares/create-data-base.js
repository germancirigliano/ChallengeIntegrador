import { Sequelize } from "sequelize";
/**
 * Crea la base de datos en caso de no existir.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const createDataBase = async function (req, res, next) {
  const sequelize = new Sequelize({dialect: "mariadb", username: process.env.DBUSER, port: process.env.DBPORT, host: process.env.HOST});
  await sequelize.queryInterface.createDatabase(process.env.DB);
  sequelize.close();
  next();
}

export default createDataBase;