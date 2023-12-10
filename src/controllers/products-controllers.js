import productModel from '../models/products.js';

const createTable = async (req,res) => {
  try {return await productModel.createTable();}
  catch (e) {console.log('Problema al crear la tabla: Ya existe');}
  finally{}
}

const getAllProducts = async (req,res) => {
  const data = await productModel.getAllProduct();
  res.send(data)
};

const getProduct = async (req,res) => {
  const data = await productModel.getProduct(req.params.id);
  res.send(data);
}

const postProduct = async (req,res) => {
  const data = await productModel.postProduct(req.body);
  res.send(data);
}

const updProduct = async (req,res) => {
  const data = await productModel.updProduct(req.params.id, req.body);
  res.send(data ? 'Se modificó' : 'No se modificó');
} 

const delProduct = async (req,res) => {
  const data = await productModel.delProduct(req.params.id);
  res.send(data ? 'Se borró' : 'No se borró');
}


const controller = {
  getAllProducts,
  getProduct,
  postProduct,
  updProduct,
  delProduct
}

export default controller;
