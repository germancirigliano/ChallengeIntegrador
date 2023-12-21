/**Index.js tiene que establecer la configuración del server */
require('dotenv').config();
const express = require('express');
const path = require('path');
const mainRoutes = require('./src/routes/main-routes');
const shopRoutes = require('./src/routes/shop-routes');
const adminRoutes = require('./src/routes/admin-routes');
const authRoutes = require('./src/routes/auth.routes');
const {initSession} = require('./src/middlewares/session');

const methodOverride = require('method-override');


const app = express();
const PORT = process.env.PORT || 8080;
// const  = path.resolve(__dirname);




// set the view engine
app.set('view engine', 'ejs');
// ubicacion donde tiene que ir a buscar las vistas
app.set('views', path.resolve(__dirname, "./src/views/pages"));

//Carpeta de estáticos
app.use(express.static(path.resolve(__dirname, "public")));

//Crear sesión del usuario
app.use(initSession());

/* Le pasamos a locals si el user esta logueado para aprovecharlo en las Vistas */

app.use((req, res, next) => {
  res.locals.isLogged = req.session.isLogged;
  next();
});

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Override que habilita métodos put y delete
app.use(methodOverride('_method'));


//Rutas
app.use("/", mainRoutes); // --> http://localhost:8080/
app.use("/shop", shopRoutes); // --> http://localhost:8080/shop
app.use("/admin", adminRoutes); // --> http://localhost:8080/admin
app.use("/auth", authRoutes);// --> http://localhost:8080/admin

// levantar servidor
app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});
