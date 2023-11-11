import express from 'express';
/**Enrutador */
const mainRouter = express.Router();

// GET -> /home
router.get("/home", (req, res) => {
  res.send("Route for Home view");
});
// - GET -> /contact
router.get("/contact", (req, res) => {
  res.send("Route for Contact view");
});
// - GET -> /about
router.get("/about", (req, res) => {
  res.send("Route for About view");
});
// - GET -> /faqs
router.get("/faqs", (req, res) => {
  res.send("Route for Faqs view");
});

export default mainRouter;