const selectedFunkos = [
  {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 1,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
  },
  {
    product_id: 2,
    licence_name: "Star Wars",
    category_name: "Figuras coleccionables",
    product_name: "Trooper",
    product_description: "Figura coleccionable star wars",
    product_price: 3000,
    dues: 5,
    product_sku: "STM001001",
    img_front: "/img/star-wars/trooper-1.webp",
    img_back: "/img/star-wars/trooper-box.webp"
  },
  {
    product_id: 3,
    licence_name: "Star Wars",
    category_name: "Figuras coleccionables",
    product_name: "Bobbafeth",
    product_description: "Figura coleccionable star wars",
    product_price: 3500,
    dues: 1,
    product_sku: "STM001002",
    img_front: "/img/star-wars/bobbafeth-1.webp",
    img_back: "/img/star-wars/bobbafeth-box.webp"
  },
  {
    product_id: 4,
    licence_name: "Star Wars",
    category_name: "Figuras coleccionables",
    product_name: "Luke",
    product_description: "Figura coleccionable star wars",
    product_price: 3500,
    dues: 1,
    product_sku: "STM001002",
    img_front: "/img/star-wars/luke-1.webp",
    img_back: "/img/star-wars/luke-box.webp"
  }
];


function getSelectedFunkos() {
  return selectedFunkos;
};

export { getSelectedFunkos };
