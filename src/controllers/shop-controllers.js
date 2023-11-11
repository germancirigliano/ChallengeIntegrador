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
  getCarrito: (req, res) => {
    res.send("Route for carrito view");
  },
  getCarritoData: (req, res) => {
    const body = req.body;
  }
}

export { shopControllers };

