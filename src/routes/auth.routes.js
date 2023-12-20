const express = require('express');
const authControllers = require('../controllers/auth-controllers.js');

const authRouter = express.Router();
// - GET -> /auth/login
authRouter.get("/login", authControllers.getLogin);

// - POST -> /auth/login
authRouter.post("/login", authControllers.postLogin);

// - GET -> /auth/register
authRouter.get("/register", authControllers.getRegister);

// - POST -> /auth/register
authRouter.post("/register", authControllers.postRegister);

// - GET -> /auth/logout
authRouter.get("/logout", authControllers.getLogout);

module.exports = authRouter;