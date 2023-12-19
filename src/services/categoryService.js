import categoryModel from '../models/category';

const getAllCategory = async() => {
  return await categoryModel.getAllCategory();
}

export default {getAllCategory};