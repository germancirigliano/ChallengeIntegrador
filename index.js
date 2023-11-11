/**Index.js tiene que establecer la configuracion del server */
import express from 'express';
import router from './src/routes/main-routes.js';
import shopRouter from './src/routes/shop-routes.js';
import adminRouter from './src/routes/admin-routes.js'; 

const app = express();
const PORT = 8080;

app.use(express.static('public'));
app.use("/", router);
app.use("/shop", shopRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});