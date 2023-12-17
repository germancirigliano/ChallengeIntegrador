import path from 'node:path';
import productsServices from '../services/products-services.js';

const shopControllers = {
  getShop: (req, res) => {
    res.send("Route for Shop View");
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
  getCarritoPage: async (req, res) => {
    //Temporalmente uso getAllFunkos por que es lo que tenemos.
    //Deberia haber algun lugar en donde seleccionen items y levantar
    //los seleccionados pero eso no ocurre.
    productsServices.getAllFunkos().then(funkos => {
      res.render("pages/shop/carrito", {funkos: funkos});
    }); 
  },
  getCarritoData: (req, res) => {
    const body = req.body;
  }
}

export { shopControllers };

