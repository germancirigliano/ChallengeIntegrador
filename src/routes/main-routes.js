import express from 'express';
import { mainControllers } from './../controllers/main-controllers.js'
/**Enrutador */
const mainRouter = express.Router();

// GET -> /home
mainRouter.get("/", mainControllers.getHome);



// - GET -> /contact
mainRouter.get("/contact", mainControllers.getContact);
// - GET -> /about
mainRouter.get("/about", (req, res) => {
  res.send("Route for About view");
});
// - GET -> /faqs
mainRouter.get("/faqs", (req, res) => {
  res.send("Route for Faqs view");
});

export default mainRouter;