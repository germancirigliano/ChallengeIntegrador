const LicenceService = require('../services/licenceService');

module.exports = {
  getHome: async(req, res) => {
    const licences = await LicenceService.getAllLicences();
    res.render('index',{
      collections: licences.data,
      enableGlide: true
    });
  },
  getContact: (req,res) => {
    res.render("pages/shop/contact",{});
  }
};