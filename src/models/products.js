import {sequelize, queryInterface} from '../config/conn.js';
import {Model, INTEGER, STRING, DECIMAL, DataTypes  } from 'sequelize';
import { Category } from "./category.js";
import { Licence } from './licence.js';

class Product extends Model {};

Product.init(
  {
    product_id: { type: INTEGER, primaryKey: true},
    product_name: { type: STRING(60), allowNull: true },
    product_description: { type: STRING, allowNull: true , defaultValue: null},
    price: { type: DECIMAL(10, 2), allowNull: true , defaultValue: 0},
    stock: { type: INTEGER, allowNull: true, defaultValue: 0 },
    discount: { type: INTEGER, allowNull: true, defaultValue: 0 },
    sku: { type: STRING(30), allowNull: true, defaultValue: ""},
    dues: { type: INTEGER, allowNull: true, defaultValue: 0 },
    image_front: { type: STRING(200), allowNull: true, defaultValue: "" },
    image_back: { type: STRING(200), allowNull: true, defaultValue: "" },
    create_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    licence_id: {
      type: INTEGER, allowNull: true, defaultValue: null,
      references: {
        model: 'licence',
        key: 'licence_id'
      }
    },
    category_id: {
      type: INTEGER, allowNull: true, defaultValue: null,
      references: {
        model: 'category',
        key: 'category_id'
      }
    }
  },
  {
    sequelize,
    modelName: 'product',
    tableName: 'product',
    timestamps: false
  }
);

const getAllProduct = async() => {
  return await Product.findAll();
}

const getAllCategory = async() => {
  let data = await Category.findAll()
  .then(categories => categories.map(category => category.dataValues))
  return data;
}

const getProduct = async(id) =>{
  const data = await Product.findOne({where: {id}});
  return data;
}

const postProduct = async (data) => {
  const funko = await Product.create(data);
  return funko;
}

const updProduct = async(id,data) =>{
  const result = await Product.update(data, {where:{id}})
  return result[0];
}

const delProduct = async(id) =>{
  const result = await Product.destroy({where:{id}});
  return result;
}


/**
* Crea la primera tabla
* @returns la respuesta
*/
const createTableSequelize = async () => {
  return await Product.sequelize.sync();
};

const loadInitialData = async (initialData) => {
  const arrayOfFunkos = initialData.funkos, arrayOfCategories = initialData.categories, arrayOfLicences = initialData.licences;
  await createInitialCategories(arrayOfCategories);
  await createInitialLicences(arrayOfLicences);
  return await createInitialFunkos(arrayOfFunkos);
}

const createInitialCategories = async (initialCategories) => await Category.bulkCreate(initialCategories, {validate: true});
const createInitialLicences = async (initialLicences) => await Licence.bulkCreate(initialLicences, {validate: true});
const createInitialFunkos = async (initialFunkos) => await Product.bulkCreate(initialFunkos, {validate: true});
 

const productModel = {
  getAllProduct,
  getProduct,
  postProduct,
  updProduct,
  delProduct,
  createTableSequelize,
  loadInitialData
}

export default productModel;