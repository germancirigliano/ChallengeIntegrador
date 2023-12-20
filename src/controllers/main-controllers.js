const LicenceService = require('../services/licenceService');
const ProductService = require('../services/productService');

module.exports = {
  getHome: async(req, res) => {
    const licences = await LicenceService.getAllLicences();
    const products = await ProductService.getAllProducts();
    res.render('index',{
      collections: licences.data,
      items: products.data,
      enableGlide: true
    });
  },
  getContact: (req,res) => {
    res.render('shop/contact');
  }
};