const LicenceModel = require('../models/licence');

const getAllLicences = async() =>{
  return await LicenceModel.getAllLicence();
}

module.exports = {
  getAllLicences,
}