const { conn } = require('../config/conn');

const getAllLicence = async () => {
  try {
    const [rows] = await conn.query('SELECT * FROM licence;');
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
  } finally {
    await conn.releaseConnection();
  }
}


module.exports = {
  getAllLicence
}