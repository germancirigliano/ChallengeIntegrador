import productsServices from '../services/products-services.js';

const loadInitialData = async function (req, res, next) {
  await productsServices.loadInitialData();
  next();
}

export default loadInitialData;