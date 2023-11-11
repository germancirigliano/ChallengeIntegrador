import express from 'express';
import ShopControllers  from '../controllers/shop-controllers';

const router = express.Router();

// GET -> /shop
router.get("/shop", (req, res) => {

});
// - GET -> /shop/item/:id
router.get("/shop/item/:id", (req, res) => {

});
// - POST -> /shop/item/:id/add
router.post("/shop/item/:id/add", (req, res) => {
  const body = req.body;
});
// - GET -> /shop/cart
router.get("/shop/carrito", (req, res) => {
});
// - POST -> /shop/cart
router.post("/shop/carrito", (req, res) => {
  const body = req.body;
});