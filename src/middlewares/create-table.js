import productsServices from '../services/products-services.js';

/**
 * Crea la primera tabla conectándose a la DB (products)
 * @returns Información de la DB sobre la tabla creada
 */
async function initTable(req, res, next) {
  const result = await productsServices.createTable();
  if (result) console.log("se creo la tabla, result --> ", result);
  next();
}

export default initTable;