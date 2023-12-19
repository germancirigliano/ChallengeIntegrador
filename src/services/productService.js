import ProductModel from '../models/products.js';

const getAllProducts = async ()=> {
  return await ProductModel.getAllProduct();
}

const getProduct = async (id) => {
  return await ProductModel.getProduct({product_id: id});
}

const postProduct = async (product,files) => {
  const productSchema = {
    product_name: product.name,
    product_description: product.description,
    price: product.price,
    stock: product.stock,
    discount: product.discount,
    sku: product.sku,
    dues: product.dues,
    image_front: '/'+files[0].filename,
    image_back: '/'+files[1].filename,
    licence_id: product.collection,
    category_id: product.category
  }
  return await ProductModel.postProduct([Object.values(productSchema)]);
}

const updProduct = async (product,id) => {
  const productSchema = {
    product_name: product.name,
    product_description: product.description,
    price: product.price,
    stock: product.stock,
    discount: product.discount,
    sku: product.sku,
    dues: product.dues,
    image_front: '/'+files[0].filename,
    image_back: '/'+files[1].filename,
    licence_id: product.collection,
    category_id: product.category
  }
  return await ProductModel.updProduct(productSchema,{product_id: id});
} 

const delProduct = async (id) => {
  return await ProductModel.delProduct({product_id: id});
}


const controller = {
  getAllProducts,
  getProduct,
  postProduct,
  updProduct,
  delProduct
}

export default controller;