import ProductService from '../services/productService';
import LicenceService from '../services/licenceService';
import CategoryService from '../services/categoryService';

const adminController = {
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

  getEditView: async(req,res) =>{
    const id = req.params.id;
    const {data: categories} = await CategoryService.getAllCategory();
    const {dta: licences} = await LicenceService.getAllLicences();
    const {data} = await ProductService.getProduct();
    console.log(categories,licences);
    res.render('./admin/edit', {
      item: data[0],
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
    const id = req.params.id;
    await ProductService.delProduct(id);
    res.redirect('/admin');
  },
};

export default adminController;