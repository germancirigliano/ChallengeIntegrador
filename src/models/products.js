import {sequelize, queryInterface} from '../config/conn.js';
import {Model, INTEGER, STRING, DECIMAL, DATE} from 'sequelize';
import { Category } from "./category.js";
import { Licence } from './licence.js';

class Product extends Model {};

Product.init(
  {
    product_id: { type: INTEGER, allowNull: true, primaryKey: true },
    product_name: { type: STRING, allowNull: true },
    product_description: { type: STRING, allowNull: true , defaultValue: null},
    price: { type: DECIMAL(10, 2), allowNull: true , defaultValue: 0},
    stock: { type: INTEGER, allowNull: true, defaultValue: 0 },
    discount: { type: INTEGER, allowNull: true, defaultValue: 0 },
    sku: { type: STRING, allowNull: true, defaultValue: ""},
    dues: { type: INTEGER, allowNull: true, defaultValue: 0 },
    image_front: { type: STRING, allowNull: true, defaultValue: "" },
    image_back: { type: STRING, allowNull: true, defaultValue: "" },
    create_time: { type: DATE, allowNull: true },
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
  const arrayOfFunkos = initialData;
  return await Product.bulkCreate(arrayOfFunkos, {validate: true});
}
 

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