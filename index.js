/**Index.js tiene que establecer la configuración del server */
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import router from './src/routes/main-routes.js';
import shopRouter from './src/routes/shop-routes.js';
import adminRouter from './src/routes/admin-routes.js'; 

const app = express();
const PORT = 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

// set the view engine
app.set('view engine', 'ejs');
// ubicacion donde tiene que ir a buscar las vistas
app.set('views', __dirname + "/src/views");

// middlewares
app.use(express.static('public'));
app.use("/", router);
app.use("/shop", shopRouter);
app.use("/admin", adminRouter);

// levantar servidor
app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});