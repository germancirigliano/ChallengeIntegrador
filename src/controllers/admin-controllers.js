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
    const productSchema = {
    product_name: req.body.name,
    product_description:req.body.description,
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
  await ProductModel.postProduct([Object.values(productSchema)])
  res.redirect('/admin');
  },
  
  //averiguar de bulkCreate
  bulkCreate:  async (req, res) => {
    const products = req.body;
    const result = await ProductService.postProduct(products.map(p => Object.values(p)));
    res.send(result);
  },

  getEditView: async(req,res) =>{
    const {id} = req.params;
    const {data: categories} = await CategoryService.getAllCategory();
    const {data: licences} = await LicenceService.getAllLicences();
    const [product] = await ProductService.getProduct(id);
    console.log(product);
    res.render('./admin/edit', {
      item: product,
      categories,
      licences
    });
  },
  updProduct: async(req,res) =>{
    const id = req.params.id;
    const product = req.body;

    await ProductService.updProduct(product,id);
    res.redirect('/admin');
  },
  delProduct: async(req,res) =>{
    const {id} = req.body;
    res.send('Quieres borrar el item: ' + id)
    // const id = req.params.id;
    // await ProductService.delProduct(id);
    // res.redirect('/admin');
  },
};