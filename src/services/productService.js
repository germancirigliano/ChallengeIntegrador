const ProductModel =  require('../models/products.js');

const getAllProducts = async ()=> {
  return await ProductModel.getAllProduct();
}

const getProduct = async (id) => {
  return await ProductModel.getProduct(id);
}

// const postProduct = async (product,files) => {
//   const productSchema = {
//     product_name: product.name,
//     product_description: product.description,
//     price: Number(product.price),
//     stock: Number(product.stock),
//     discount: Number(product.discount),
//     sku: product.sku,
//     dues: Number(product.dues),
//     image_front: '/products/'+files[0].filename,
//     image_back: '/products/'+files[1].filename,
//     licence_id: Number(product.collection),
//     category_id: Number(product.category)
//   }
//   return await ProductModel.postProduct([Object.values(productSchema)]);
// }

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
  return await ProductModel.updProduct(productSchema,id);
} 

const delProduct = async (id) => {
  return await ProductModel.delProduct(id);
}


module.exports = {
  getAllProducts,
  getProduct,
  // postProduct,
  updProduct,
  delProduct
};