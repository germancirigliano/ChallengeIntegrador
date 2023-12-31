const { conn } = require('../config/conn');


const getAllProduct = async() => {
  try {
    const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product INNER JOIN category ON product.category_id = category.category_id) INNER JOIN licence ON product.licence_id = licence.licence_id order by product_id;');
    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos recuperar los datos ${e}.`
    };
    return error;
  }
  finally{
    await conn.releaseConnection();
  }  
}

const getProduct = async(id) =>{
  try {
    const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', id);
    return rows;
  } catch (error) {
    return {
      error: true,
      message: `No pudimos recuperar los datos.` + error
    }
  } finally {
    await conn.releaseConnection();
  }
}

const postProduct = async (params) =>{
  try {
    const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', [params]);
    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos crear los valores seleccionados por: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
}

const updProduct = async(params,id) =>{
  try {
    const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
    return rows;
  } catch (error) {
    return {
      error: true,
      message: 'Hemos encontrado un error: ' + error
    }
  } finally {
    await conn.releaseConnection();
  }
}

const delProduct = async(params) =>{
  try {
    const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
    return rows;
  } catch (error) {
    return{  
      error: true,
      message: 'Hemos encontrado un error' + error
    }
    }
   finally {
    await conn.releaseConnection();
  }
}

module.exports = {
  getAllProduct,
  getProduct,
  postProduct,
  updProduct,
  delProduct
};