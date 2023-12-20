import productModel from '../models/products.js';
import { initialFunkos, InitialCategories, initialLicences } from '../utils/utils.js';

/**
 * Crea la primera tabla conectándose a la DB (products)
 * @returns Información de la DB sobre la tabla creada
 */
const createTable = async () => {
  return await productModel.createTableSequelize();
}

const loadInitialData = async () => {
  try {
    return await productModel.loadInitialData({funkos: initialFunkos, categories: InitialCategories, licences: initialLicences});
  } catch (e) {
    return;
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