const ProductService = require('../services/productService.js');
const LicenceService = require('../services/licenceService.js');
const CategoryService=  require('../services/categoryService.js');

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
    const product = req.body;
    const files = req.files;
    await ProductService.postProduct(product,files);
    res.redirect('/admin');
  },
  
  //averiguar de bulkCreate
  bulkCreate:  async (req, res) => {
    const products = req.body;
    const result = await ProductService.postProduct(products.map(p => Object.values(p)));
    res.send(result);
  },

  getEditView: async(req,res) =>{
    const id = req.params.id;
    const {data: categories} = await CategoryService.getAllCategory();
    const {data: licences} = await LicenceService.getAllLicences();
    const {data} = await ProductService.getProduct(id);
    console.log(categories,licences,data);
    // res.render('./admin/edit', {
    //   item: data[0],
    //   categories,
    //   licences
    // });
  },
  updProduct: async(req,res) =>{
    const id = req.params.id;
    const product = req.body;

    await ProductService.updProduct(product,id);
    res.redirect('/admin');
  },
  delProduct: async(req,res) =>{
    const id = req.params.id;
    await ProductService.delProduct(id);
    res.redirect('/admin');
  },
};