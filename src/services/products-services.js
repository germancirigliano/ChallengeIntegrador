import products from '../models/products.js'
import { sequelize } from '../config/conn.js'

/**
 * Crea la primera tabla conectándose a la DB (products)
 * @returns Información de la DB sobre la tabla creada
 */
const createTable = async () => {
  try { return await products.createTableSequelize().catch((e) => console.log("ERROR: ", e)); }
  catch (e) { 
    console.log("Problema al crear la tabla");
    console.log(e);
  }
  finally { 
    sequelize.close();
  }
}

/**
 * Objeto con las funciones de servicios
 */
const services = {
  createTable
};

export default services;