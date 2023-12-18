import { resolve } from 'path';
const __dirname = resolve();
import { getSelectedFunkos } from '../services/funkos-carrito-service.js';

const shopControllers = {
  getShop: (req, res) => {
    console.log("La ruta relativa es, "+ __dirname);
    res.render(__dirname,'views/pages/shop/shop.ejs')
  },
  getItem: (req, res) => {
    const id = req.params.id;
    res.send("Route for Shop Item View");
  },
  addItem: (req, res) => {
    //Esta ruta es para el boton de "Agregar al carrito" de la pagina "item"
    const id = req.params.id;
    const body = req.body;
  },
  getCarrito: (req, res) => {
  //MISSION#4
    // console.log(path.relative());
    // res.send("Route for carrito view");
    
  //MISSION#5
    const selectedFunkos = getSelectedFunkos();
    res.render("pages/shop/carrito", {funkos: selectedFunkos});
  },
  getCarritoData: (req, res) => {
    const body = req.body;
  }
}

export { shopControllers };

