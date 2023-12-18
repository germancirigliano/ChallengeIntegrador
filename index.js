/**Index.js tiene que establecer la configuración del server */
import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import mainRouter from './src/routes/main-routes.js';
import shopRouter from './src/routes/shop-routes.js';
import adminRouter from './src/routes/admin-routes.js';
import authRouter from './src/routes/auth.routes.js';
import productsRouter from './src/routes/products-routes.js';
import { dbConnect } from './src/config/conn.js';

dbConnect();

dotenv.config()
const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = resolve();

// set the view engine
app.set('view engine', 'ejs');
// ubicacion donde tiene que ir a buscar las vistas
app.set('views', __dirname + "/src/views");

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use("/", mainRouter); // --> http://localhost:8080/
app.use("/shop", shopRouter); // --> http://localhost:8080/shop
app.use("/admin", adminRouter); // --> http://localhost:8080/admin
app.use("/auth", authRouter);// --> http://localhost:8080/admin
app.use("/products", productsRouter);// --> http://localhost:8080/

// levantar servidor
app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});
