import products from '../models/products.js';
import { sequelize } from '../config/conn.js';

/**
 * Crea la primera tabla conectándose a la DB (products)
 * @returns Información de la DB sobre la tabla creada
 */
const createTable = async () => {
  try { 
    return await products.createTableSequelize()
    .catch((e) => console.log("ERROR: ", e)); 
  } catch (e) { 
    console.log("Problema al crear la tabla");
    console.log(e);
  } finally {
    sequelize.close();
  }
}

const loadInitialData = async () => {
  try {
    return await products.loadInitialData(initialData);
  } catch (e) {
    console.log("Error intentando agregar data inicial ==> ", e.errors );
  }
}

const initialData = [
  {
    product_id: 1,
    // licence_name: "Pokemon",
    // category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    price: 1799.99,
    dues: 1,
    sku: "PKM001001",
    image_front: "/img/pokemon/pidgeotto-1.webp",
    image_back: "/img/pokemon/pidgeotto-box.webp",
    // licence_id: 0,
    // category_id: 0
  },
  {
    product_id: 2,
    // licence_name: "Star Wars",
    // category_name: "Figuras coleccionables",
    product_name: "Trooper",
    product_description: "Figura coleccionable star wars",
    price: 3000,
    dues: 5,
    sku: "STM001001",
    image_front: "/img/star-wars/trooper-1.webp",
    image_back: "/img/star-wars/trooper-box.webp",
    // licence_id: 1,
    // category_id: 0
  },
  {
    product_id: 3,
    // licence_name: "Star Wars",
    // category_name: "Figuras coleccionables",
    product_name: "Bobbafeth",
    product_description: "Figura coleccionable star wars",
    price: 3500,
    dues: 1,
    sku: "STM001002",
    image_front: "/img/star-wars/bobbafeth-1.webp",
    image_back: "/img/star-wars/bobbafeth-box.webp",
    // licence_id: 1,
    // category_id: 0
  },
  {
    product_id: 4,
    // licence_name: "Star Wars",
    // category_name: "Figuras coleccionables",
    product_name: "Luke",
    product_description: "Figura coleccionable star wars",
    price: 3500,
    dues: 1,
    sku: "STM001002",
    image_front: "/img/star-wars/luke-1.webp",
    image_back: "/img/star-wars/luke-box.webp",
    // licence_id: 1,
    // category_id: 0
  }
];

/**
 * Objeto con las funciones de servicios
 */
const services = {
  createTable,
  loadInitialData
};

export default services;