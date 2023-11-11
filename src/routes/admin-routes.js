import express from 'express';
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