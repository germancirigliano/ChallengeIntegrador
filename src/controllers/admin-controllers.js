const ProductService = require('../services/productService.js');
const LicenceService = require('../services/licenceService.js');
const CategoryService=  require('../services/categoryService.js');
const ProductModel = require('../models/products.js');

module.exports = {
  getAdmin: async (req,res) => {
    const {data} = await ProductService.getAllProducts();
    res.render('./admin/admin', {
    products: data
    });
  },
  getCreateView: async (req,res) => {
    const {data: categories} = await CategoryService.getAllCategory();
    const {data: licences} = await LicenceService.getAllLicences();

    res.render('./admin/create', {
      categories, licences
    });
  },
  getCreate: async (req,res) => {
    
    const item = req.body;
    const files = req.files;
    await ProductService.postProduct(item, files);
    res.redirect('/admin');
  },
  
 

  getEditView: async(req,res) =>{
    const {id} = req.params;
    const {data: categories} = await CategoryService.getAllCategory();
    const {data: licences} = await LicenceService.getAllLicences();
    const [product] = await ProductService.getProduct(id);
    res.render('./admin/edit', {
      item: product,
      categories,
      licences
    });
  },
  updProduct: async(req,res) =>{
    const haveImages = req.files.length !==0
    
    const {id} = req.params;

    const productSchema = haveImages
    ? {
    product_name: req.body.name,
    product_description: req.body.description,
    price: Number(req.body.price),
    stock: Number(req.body.stock),
    discount: Number(req.body.discount),
    sku: req.body.sku,
    dues: Number(req.body.dues),
    image_front: '/products/'+req.files[0].filename,
    image_back: '/products/'+req.files[1].filename,
    licence_id: Number(req.body.licence),
    category_id: Number(req.body.category)
  }
  :{
    product_name: req.body.name,
    product_description: req.body.description,
    price: Number(req.body.price),
    stock: Number(req.body.stock),
    discount: Number(req.body.discount),
    sku: req.body.sku,
    dues: Number(req.body.dues),
    licence_id: Number(req.body.licence),
    category_id: Number(req.body.category)
  }
  await ProductModel.updProduct(productSchema,{product_id: id})
  res.redirect('/shop')
  },
  delProduct: async(req,res) =>{
    const {id} = req.params;
    await ProductService.delProduct(id);
    res.redirect('/admin');
  },
};