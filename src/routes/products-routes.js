import express from "express";
import controller from '../controllers/products-controllers.js';

const router = express.Router();

router 
  .get('/products',controller.getAllProducts)
  .post('/products',controller.postProduct)

  .get('/:id',controller.getProduct)
  .put('/:id',controller.updProduct)
  .delete('/:id',controller.delProduct)

  export default router;