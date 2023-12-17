import productsServices from '../services/products-services.js';

const loadInitialData = async function (req, res, next) {
  const result = await productsServices.loadInitialData();
  next();
}

export default loadInitialData;