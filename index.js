/**Index.js tiene que establecer la configuración del server */
import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
const mainRouter = require('./src/routes/main-routes');
const shopRouter = require('./src/routes/shop-routes');
const adminRouter = require('./src/routes/admin-routes');
const authRouter = require('./src/routes/auth.routes');

const methodOverride = require('method-override');


dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = resolve();

// set the view engine
app.set('view engine', 'ejs');
// ubicacion donde tiene que ir a buscar las vistas
app.set('views', __dirname + "/src/views");

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Carpeta de estáticos
app.use(express.static('public'));

//Rutas
app.use("/", mainRouter); // --> http://localhost:8080/
app.use("/shop", shopRouter); // --> http://localhost:8080/shop
app.use("/admin", adminRouter); // --> http://localhost:8080/admin
app.use("/auth", authRouter);// --> http://localhost:8080/admin

//Override que habilita métodos put y delete
app.use(methodOverride('_method'));

// levantar servidor
app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});
