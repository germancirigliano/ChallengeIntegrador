const express = require('express');
const adminController = require('../controllers/admin-controllers.js');
const adminRouter = express.Router();
const upload = require('../middlewares/uploadfiles.js')
const { isLogged } = require('../middlewares/login.js')

adminRouter.use(isLogged);

// - GET -> /admin VISTA DE ADMIN
adminRouter.get("/", adminController.getAdmin);
// - GET -> /admin/create VISTA PARA CREAR UN NUEVO ITEM O PRODUCTO
adminRouter.get("/create", adminController.getCreateView);
// - POST -> /admin/create CREACIÓN DEL NUEVO ITEM O PRODUCTO
adminRouter.post("/create", upload.array('images', 2),adminController.getCreate);



// - GET -> /admin/edit/:id VISTA DE EDIT PARA UN PRODUCTO
adminRouter.get("/edit/:id", adminController.getEditView);

// - PUT -> /admin/edit/:id EDITAR EL PRODUCTO O ITEM
adminRouter.put("/edit/:id", upload.array('images', 2), adminController.updProduct);

// - DELETE -> /admin/delete/:id ELIMINAR PRODUCTO EN EL TACHITO DE BASURA DE ADMIN
adminRouter.delete("/delete/:id", adminController.delProduct);

module.exports = adminRouter;