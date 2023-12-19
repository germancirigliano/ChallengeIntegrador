import LicenceService from '../services/licenceService'

const mainControllers = {
  getHome: async(req, res) => {
    const licences = await LicenceService.getAllLicences();
    res.render("index",{
      collections: licences.data,
      enableGlide: true
    });
  },
  getContact: (req,res) => {
    res.render("pages/shop/contact",{});
  }
}

export { mainControllers };