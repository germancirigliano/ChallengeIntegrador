import express from 'express';
import { shopControllers } from '../controllers/shop-controllers.js';

const shopRouter = express.Router();
// GET -> /shop
shopRouter.get("/", shopControllers.getShop);
// - GET -> /shop/item/:id
shopRouter.get("/item/:id", shopControllers.getItem);
// - POST -> /shop/item/:id/add
shopRouter.post("/item/:id/add", shopControllers.addItem);
// - GET -> /shop/cart
shopRouter.get("/carrito", shopControllers.getCarritoPage);
// - POST -> /shop/cart
shopRouter.post("/carrito", shopControllers.getCarritoData);

export default shopRouter;