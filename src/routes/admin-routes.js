import express from 'express';
import adminController from '../controllers/admin-controllers.js';
const adminRouter = express.Router();
// - GET -> /admin
adminRouter.get("/", (req, res) => {

});
// - GET -> /admin/create
adminRouter.get("/create", (req, res) => {

});
// - POST -> /admin/create
adminRouter.post("/create", (req, res) => {
  const body = req.body;
});

//Ruta temporal que devuelve la pagina de edit
//Es temporal por que edit en realidad tiene que recibir un id
//del item que se va a editar, acualmente no tenemos eso entonces
//le enviamos la pagina con datos estaticos de ejemplo.
adminRouter.get("/edit", adminController.getEditPage);

// - GET -> /admin/edit/:id
adminRouter.get("/edit/:id", (req, res) => {

});
// - PUT -> /admin/edit/:id
adminRouter.put("/edit/:id", (req, res) => {
});
// - DELETE -> /admin/delete/:id
adminRouter.delete("/delete/:id", (req, res) => {
});

export default adminRouter;