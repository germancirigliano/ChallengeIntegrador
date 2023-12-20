const express = require('express');
const adminController = require('../controllers/admin-controllers.js');
const adminRouter = express.Router();


// - GET -> /admin VISTA DE ADMIN
adminRouter.get("/", adminController.getAdmin);
// - GET -> /admin/create VISTA PARA CREAR UN NUEVO ITEM O PRODUCTO
adminRouter.get("/create", adminController.getCreateView);
// - POST -> /admin/create CREACIÓN DEL NUEVO ITEM O PRODUCTO
adminRouter.post("/create", adminController.getCreate);

//Ver bulkcreate

adminRouter.post('/create/bulk', adminController.bulkCreate);

// - GET -> /admin/edit/:id VISTA DE EDIT PARA UN PRODUCTO
adminRouter.get("/edit/:id", adminController.getEditView);

// - PUT -> /admin/edit/:id EDITAR EL PRODUCTO O ITEM
adminRouter.put("/edit/:id", adminController.updProduct);

// - DELETE -> /admin/delete/:id ELIMINAR PRODUCTO EN EL TACHITO DE BASURA DE ADMIN
adminRouter.delete("/delete/:id", adminController.delProduct);

module.exports = adminRouter;