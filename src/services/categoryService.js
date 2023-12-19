const CategoryModel = require('../models/category.js');

const getAllCategory = async() => {
  return await CategoryModel.getAllCategory();
}

module.exports = {
  getAllCategory,
}