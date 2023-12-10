import {sequelize} from '../config/conn.js';
import {Model, INTEGER, STRING, Op} from 'sequelize';

class Products extends Model { }

Products.init(
  {
    id: {type: INTEGER, allowNull: false, primaryKey: true},
    nombre: {type: STRING, allowNull: false},
    precio: {type: INTEGER, allowNull: false}
  }, 
  { sequelize, 
    modelName:'Product', 
    timestamps: false
  }
);

const createTable = async () => {
  await sequelize.query(
  "CREATE TABLE IF NOT EXISTS product(product_id int NOT NULL PRIMARY KEY, product_name varchar(60) NOT NULL, product_description varchar(255) NOT NULL, price decimal(9,2) NOT NULL, stock int NOT NULL, discount int DEFAULT NULL, sku varchar(30) NOT NULL, dues int DEFAULT NULL, image_front varchar(200) NOT NULL, image_back varchar(200) NOT NULL, create_time timestamp NULL DEFAULT NULL, licence_id int NOT NULL, category_id int NOT NULL, FOREIGN KEY (category_id) REFERENCES category (category_id), FOREIGN KEY (licence_id) REFERENCES licence (licence_id))")
};

const getAllProducts = () => {
  let data = Products.findAll()
    .then(products => products.map(product => product.dataValues))
    .catch(err => false);
  return data;
}

const getProduct = () =>{}
const postProduct = () =>{}
const updProduct = () =>{}
const delProduct = () =>{}
const getProductByMinPrice = () =>{}

const model = {
  getAllProducts,
  getProduct,
  postProduct,
  updProduct,
  delProduct,
  getProductByMinPrice
}

export default model;