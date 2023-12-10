import productModel from '../models/products.js';
import services from '../services/productsServices.js';

const createTable = async (req,res) => {
  
}

const getAllProducts = async (req,res) => {
  const data = await productModel.getProducts();
  data 
  ? res.status(200).send(data)
  : res.status(400).send({info: 'No hay productos'});
};

const getProduct = async (req,res) => {
  const data = await productModel.getProduct(req.params.id);
  res.send(data);
}

const postProduct = async (req,res) => {

}

const updProduct = async (req,res) => {

} 

const delProduct = async (req,res) => {

}

const getProductByMinPrice = async (req,res) => {

}

const controller = {
  getAllProducts,
  getProduct,
  postProduct,
  updProduct,
  delProduct,
  getProductByMinPrice
}

export default controller;
