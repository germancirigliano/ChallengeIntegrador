const quantityInputs = document.querySelectorAll(".quantity-selector__input");
const addButtons = document.querySelectorAll(".add-button");
const substractButtons = document.querySelectorAll(".substract-button");
const totalPriceContainers = document.querySelectorAll(".total-price-container p");
const carritoResumen = document.querySelector(".carrito__resumen");

function validateInput(e) {
  if (isNaN(this.value) || this.value < 0 || this.value === "") this.value = ""; 
  else if (this.value.length > 3) this.value = this.value.slice(0, 3);
  const article = this.closest(".articulos__articulo"), value = this.value;
  setTotalPrice(article, value);
};

function agregaItem(e) {
  let targetInput = e.target.closest(".quantity-selector").querySelector("input");
  const newValue = !targetInput.value ? 1 : Number(targetInput.value) + 1;
  targetInput.value = newValue;

  const quantitySelector = e.target.closest(".quantity-selector");
  const article = quantitySelector.closest(".articulos__articulo");

  setTotalPrice(article, newValue);
};

function restaItem(e) {
  let targetInput = e.target.closest(".quantity-selector").querySelector("input");
  const newValue = !targetInput.value || Number(targetInput.value) <= 0 ? 0 : Number(targetInput.value) - 1;
  targetInput.value = newValue;

  const quantitySelector = e.target.closest(".quantity-selector");
  const article = quantitySelector.closest(".articulos__articulo");
  setTotalPrice(article, newValue);
};


function setTotalPrice(article, value) { 
  const funkoPrice = parseInt(article.querySelector(".price-container p").innerText.split("$")[1]);
  const totalPrice = funkoPrice * value;
  let totalPriceContainer = article.querySelector(".total-price-container p");
  totalPriceContainer.innerText = "$" + totalPrice;
  updateResumen();
};

/**Suma todos los totales y aplica valor al subtotal */
function updateResumen() {
  let sum = 0, sumQ = 0;
  totalPriceContainers.forEach((totalPriceContainer) => {
    sum += Number(totalPriceContainer.textContent.split("$")[1]);
  });
  quantityInputs.forEach((qInput) => {
    sumQ += Number(qInput.value);
  });

  //contenedor de numero subtotal del resumen
  carritoResumen.querySelector(".resumen-subtotal .subtotal").innerText = "$ " + sum;
  //contenedor de total del resumen
  carritoResumen.querySelector(".resumen-table__total-row .total").innerText = "$ " + sum;
  //contenedor de cantidad de elementos del resumen
  carritoResumen.querySelector(".resumen-quantity .quantity").innerText = sumQ;
};

function inputChange(e) {
  const input = e.target;
 console.log("Input change");
};

quantityInputs.forEach((quantityInput) => {
  quantityInput.type = "number";
  quantityInput.addEventListener("input", validateInput);
  const article = quantityInput.closest(".articulos__articulo")
  quantityInput.addEventListener("load", setTotalPrice(article, quantityInput.value));
});
addButtons.forEach((button) => {
  button.addEventListener("click", agregaItem);
});
substractButtons.forEach((button) => {
  button.addEventListener("click", restaItem);
});
