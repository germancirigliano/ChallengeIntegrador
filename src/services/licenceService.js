import licenceModel from '../models/licence';

const getAllLicences = async(req,res) =>{
  return await licenceModel.getAllLicence();
}

const controller = {
  getAllLicences
}

export default controller;