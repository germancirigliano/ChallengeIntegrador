import express from 'express';
const router = express.Router();
// - GET -> /admin
router.get("/admin", (req, res) => {

});
// - GET -> /admin/create
router.get("/admin/create", (req, res) => {

});
// - POST -> /admin/create
router.post("/admin/create", (req, res) => {
  const body = req.body;
});
// - GET -> /admin/edit/:id
router.get("/admin/edit/:id", (req, res) => {

});
// - PUT -> /admin/edit/:id
router.put("/admin/edit/:id", (req, res) => {

});
// - DELETE -> /admin/delete/:id
router.delete("/admin/delete/:id", (req, res) => {

});