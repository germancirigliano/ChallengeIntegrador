import express from 'express';
import { mainControllers } from './../controllers/main-controllers.js'
import createDataBase from '../middlewares/create-data-base.js';
import createTable from '../middlewares/create-table.js';
import loadInitialData from '../middlewares/loadInitialData.js';

/**Enrutador */
const mainRouter = express.Router();

// GET -> /home
mainRouter.get("/",[createDataBase, createTable, loadInitialData], mainControllers.getHome);
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