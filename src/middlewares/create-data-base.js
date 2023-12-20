import { queryInterface } from "../config/conn.js";
/**
 * Crea la base de datos en caso de no existir.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const createDataBase = async function (req, res, next) {
  await queryInterface.createDatabase("Funkos");
  next();
}

export default createDataBase;