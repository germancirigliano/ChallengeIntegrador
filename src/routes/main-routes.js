import express from 'express';
/**Enrutador */
const mainRouter = express.Router();

// GET -> /home
mainRouter.get("/home", (req, res) => {
  res.send("Route for Home view");
});
// - GET -> /contact
mainRouter.get("/contact", (req, res) => {
  res.send("Route for Contact view");
});
// - GET -> /about
mainRouter.get("/about", (req, res) => {
  res.send("Route for About view");
});
// - GET -> /faqs
mainRouter.get("/faqs", (req, res) => {
  res.send("Route for Faqs view");
});

export default mainRouter;