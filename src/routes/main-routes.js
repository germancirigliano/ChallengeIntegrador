const express = require('express');
/**Enrutador */
const router = express.Router();

const {
  getHome,
  getContact
} = require('../controllers/main-controllers');

// GET -> /home
router.get("/", getHome);

// - GET -> /contact
router.get("/contact", getContact);
// - GET -> /about
router.get("/about", (req, res) => {
  res.send("Route for About view");
});
// - GET -> /faqs
router.get("/faqs", (req, res) => {
  res.send("Route for Faqs view");
});

module.exports = router;