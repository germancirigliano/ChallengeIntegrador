//import { getSelectedFunkos } from '../services/funkos-carrito-service.js';
const Productos =  require('../services/productService');

module.exports = {
  getShop: async(req, res) => {
    const products = await Productos.getAllProducts();
    const {data} = products;
    res.render('./shop/shop',{products: data});
  },
  getItem: async(req, res) => {
    const products = await Productos.getAllProducts();
    const id = req.params.id;
    const [item] = await Productos.getProduct(id);
    const data = item;
    console.log(data);
    // if (!data[0]) {
    //   res.status(404).send('El producto con el ID seleccionado no existe o fue eliminado');
    // }

    res.render('./shop/item', {
      item: data,
      items: products.data,
      enableGlide: true
    });
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
    // const selectedFunkos = getSelectedFunkos();
    // res.render("pages/shop/carrito", {funkos: selectedFunkos});
  },
  getCarritoData: (req, res) => {
    const body = req.body;
  }
};

