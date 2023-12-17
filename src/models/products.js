import {sequelize, queryInterface} from '../config/conn.js';
import {Model, INTEGER, STRING, DECIMAL, DATE} from 'sequelize';
import { Category } from "./category.js";
import { Licence } from './licence.js';

class Product extends Model {};

Product.init(
  {
    product_id: { type: INTEGER, allowNull: true, primaryKey: true },
    product_name: { type: STRING, allowNull: true },
    product_description: { type: STRING, allowNull: true },
    price: { type: DECIMAL(10, 2), allowNull: true , defaultValue: 0},
    stock: { type: INTEGER, allowNull: true, defaultValue: 0 },
    discount: { type: INTEGER, allowNull: true, defaultValue: 0 },
    sku: { type: STRING, allowNull: true, defaultValue: ""},
    dues: { type: INTEGER, allowNull: true, defaultValue: 0 },
    image_front: { type: STRING, allowNull: true, defaultValue: "" },
    image_back: { type: STRING, allowNull: true, defaultValue: "" },
    create_time: { type: DATE, allowNull: true, defaultValue: null },
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
  let data = await Product.findAll()
  .then(products => products.map(product => product.dataValues))
  // if (data.length===0) { data = Product.create({
  //    product_id: 1,
  //    product_name: 'Baby Yoda Blueball',
  //    product_description:'Figura funko coleccionable de la saga star wars & the mandalorian',
  //    price: 1799,
  //    stock: 5,
  //    discount: 0,
  //    sku: 'STW001001',
  //    dues:0,
  //    image_front:'p',
  //    image_back:'s',
  //    create_time:'2023-10-12 17:30:00',
  //    licence_id:3,
  //    category_id: 1
  //  }) }  ----------USAR ESTO SI NO CARGAN EL SCRIPT DE SQL----------
  return data;
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
  // let producto = {
  //   product_id: data.product_id,
  //   product_name: data.product_name,
  //   product_description: data.product_description,
  //   price: data.price,
  //   stock: data.stock,
  //   discount: data.discount,
  //   sku: data.sku,
  //   dues: data.dues,
  //   image_front: data.image_front,
  //   image_back: data.image_back,
  //   create_time: data.create_time
  //   licence_id: data.licence_id //Numero que hace de clave foranea
  //   category_id: data.category_id //Numero que hace de clave foranea
  // }

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
}
 

const model = {
  getAllProduct,
  getProduct,
  postProduct,
  updProduct,
  delProduct,
  createTableSequelize
}

export default model;