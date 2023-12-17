import productModel from '../models/products.js';
import { dbConnect, sequelize } from '../config/conn.js';
import { initialData } from '../utils/utils.js';

/**
 * Crea la primera tabla conectándose a la DB (products)
 * @returns Información de la DB sobre la tabla creada
 */
const createTable = async () => {
  try { 
    return await productModel.createTableSequelize()
    .catch((e) => console.log("ERROR: ", e)); 
  } catch (e) { 
    console.log("Problema al crear la tabla");
    console.log(e);
  }
}

const loadInitialData = async () => {
  try {
    return await productModel.loadInitialData(initialData);
  } catch (e) {
    console.log("Error intentando agregar data inicial ==> ", e.errors );
  }
}

const getAllFunkos = async () => {
  return await productModel.getAllProduct().then(products => products.map(product => product.dataValues));
}

/**
 * Objeto con las funciones de servicios
 */
const productsServices = {
  createTable,
  loadInitialData,
  getAllFunkos
};

export default productsServices;