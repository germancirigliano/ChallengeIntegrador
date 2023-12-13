import {sequelize} from '../config/conn.js';
import {Model, INTEGER, STRING} from 'sequelize';

class Category extends Model {};

Category.init(
   {
     category_id:{type:INTEGER,allowNull:false, primaryKey: true},
     category_name: {type: STRING, allowNull: false},
     category_description: {type: STRING, allowNull:true},    
   }, 
   { sequelize, 
     modelName: 'category',
     tableName: 'category', 
     timestamps: false
   }
 );

const getAllCategory = async() => {
  let data = await Category.findAll()
  .then(categories => categories.map(category => category.dataValues))
  return data;
}

const getCategory = async(id) =>{
  const data = await Category.findOne({where: {id}});
  return data;
}

const postCategory = async (data) =>{
  const result = await Category.create(data);
  return result;
}

const updCategory = async(id,data) =>{
  const result = await Category.update(data, {where:{id}})
  return result[0];
}

const delCategory = async(id) =>{
  const result = await Category.destroy({where:{id}});
  return result;
}


const model = {
  getAllCategory,
  getCategory,
  postCategory,
  updCategory,
  delCategory
}

export default model;