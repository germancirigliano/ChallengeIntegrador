const express = require('express');
const authControllers = require('../controllers/auth-controllers.js');
const validateInput = require('../middlewares/validator');
const { body } = require('express-validator');

const loginValidation = [
  body('email')
  .isEmail()
  .withMessage('Necesito que ingrese un correo válido'),
  body('password')
   .isLength({ min: 6})
   .isAlphanumeric()
   .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y números.')
];

const authRouter = express.Router();
// - GET -> /auth/login
authRouter.get("/login", authControllers.getLogin);

// - POST -> /auth/login
authRouter.post("/login", loginValidation, validateInput,authControllers.postLogin);

// - GET -> /auth/register
authRouter.get("/register", authControllers.getRegister);

// - POST -> /auth/register
authRouter.post("/register", authControllers.postRegister);

// - GET -> /auth/logout
authRouter.get("/logout", authControllers.getLogout);

module.exports = authRouter;