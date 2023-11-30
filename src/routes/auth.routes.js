import express from 'express';
import { authControllers } from '../controllers/auth-controllers';

const authRouter = express.Router();
// - GET -> /auth/login
router.get("/auth/login",(req,res) => {

});
// - POST -> /auth/login
router.post("/auth/login",(req,res) => {
  const body = req.body;
});
// - GET -> /auth/register
authRouter.get("/auth/register", authControllers.getRegister);
// - POST -> /auth/register
authRouter.post("/auth/register", authControllers.postRegister); 
// - GET -> /auth/logout
router.get("/auth/logout",(req,res) => {

});
export default authRouter;