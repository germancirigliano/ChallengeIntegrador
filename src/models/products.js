import {sequelize} from '../config/conn.js';
import {Model, INTEGER, STRING, DECIMAL, DATE} from 'sequelize';

class Product extends Model {};


   Product.init(
   {
     product_id: {type: INTEGER, allowNull: false, primaryKey: true},
     product_name: {type: STRING, allowNull: false},
     product_description: {type: STRING, allowNull:false},
     price: {type: DECIMAL(10,2), allowNull: false},
     stock: {type:INTEGER, allowNull: false},
     discount: {type:INTEGER, allowNull:true},
     sku:{type: STRING, allowNull:false},
     dues:{type:INTEGER,allowNull:true},
     image_front:{type:STRING,allowNull:false},
     image_back:{type:STRING,allowNull:false},
     create_time:{type:DATE,allowNull:true},
     licence_id:{type:INTEGER,allowNull:false,
    references: {
      model: 'licence',
      key: 'licence_id'
    }},
     category_id:{type:INTEGER,allowNull:false, 
      references: {
        model: 'category' ,
        key: 'category_id'
      }}
   }, 
   { sequelize, 
     modelName: 'product',
     tableName: 'product', 
     timestamps: false
   }
 );
   // await Product.sync({force: false,alter:true}); //Crea la tabla si no existe y no hace nada si ya existe. Si existe, pero con valores diferentes le realiza los cambios para que coincida

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

const postProduct = async (data) =>{
  const result = await Product.create(data);
  return result;
}

const updProduct = async(id,data) =>{
  const result = await Product.update(data, {where:{id}})
  return result[0];
}

const delProduct = async(id) =>{
  const result = await Product.destroy({where:{id}});
  return result;
}


const model = {
  getAllProduct,
  getProduct,
  postProduct,
  updProduct,
  delProduct
}

export default model;