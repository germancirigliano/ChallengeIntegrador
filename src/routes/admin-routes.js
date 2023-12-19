import express from 'express';
import adminController from '../controllers/admin-controllers.js';
const adminRouter = express.Router();


// - GET -> /admin VISTA DE ADMIN
adminRouter.get("/", adminController.getAdmin)
// - GET -> /admin/create VISTA PARA CREAR UN NUEVO ITEM O PRODUCTO
adminRouter.get("/create", adminController.getCreateView)
// - POST -> /admin/create CREACIÓN DEL NUEVO ITEM O PRODUCTO
adminRouter.post("/create", adminController.getCreate)

//Ver bulkcreate

// - GET -> /admin/edit/:id VISTA DE EDIT PARA UN PRODUCTO
adminRouter.get("/edit/:id", adminController.getEditView);

// - PUT -> /admin/edit/:id EDITAR EL PRODUCTO O ITEM
adminRouter.put("/edit/:id", adminController.updProduct);

// - DELETE -> /admin/delete/:id ELIMINAR PRODUCTO EN EL TACHITO DE BASURA DE ADMIN
adminRouter.delete("/delete/:id", adminController.delProduct);

export default adminRouter;