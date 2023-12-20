import productsServices from '../services/products-services.js';

/**
 * Crea la primera tabla conectándose a la DB (products)
 * @returns Información de la DB sobre la tabla creada
 */
async function createTable(req, res, next) {
  await productsServices.createTable();
  next();
}

export default createTable;