import express from 'express';
import { authControllers } from '../controllers/auth-controllers.js';

const authRouter = express.Router();
// - GET -> /auth/login
authRouter.get("/login", (req, res) => {
  
});

// - POST -> /auth/login
authRouter.post("/login", (req, res) => {
  const body = req.body;
});

// - GET -> /auth/register
authRouter.get("/register", authControllers.getRegister);

// - POST -> /auth/register
authRouter.post("/register", authControllers.postRegister);

// - GET -> /auth/logout
authRouter.get("/logout", (req, res) => {

});

export default authRouter;