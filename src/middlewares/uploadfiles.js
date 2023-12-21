const multer =  require('multer');
const path = require('path');

/* Esto nos sirve para guardar imagenes en el server */

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/img/products')),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({storage});

module.exports = upload;