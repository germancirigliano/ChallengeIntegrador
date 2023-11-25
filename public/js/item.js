const quantityInputs = document.querySelectorAll(".quantity-selector__input");
const addButtons = document.querySelectorAll(".add-button");
const substractButtons = document.querySelectorAll(".substract-button");

function validateInput(e) {
  if (isNaN(this.value) || this.value < 0 || this.value === "") this.value = ""; 
  else if (this.value.length > 3) this.value = this.value.slice(0, 3);
}

function agregaItem(e) {
  let targetInput = e.target.closest(".quantity-selector").querySelector("input");
  const newValue = !targetInput.value ? 1 : Number(targetInput.value) + 1;
  targetInput.value = newValue;

  const quantitySelector = e.target.closest(".quantity-selector");
  const article = quantitySelector.closest(".articulos__articulo");

  setTotalPrice(article, newValue);
}

function restaItem(e) {
  let targetInput = e.target.closest(".quantity-selector").querySelector("input");
  const newValue = !targetInput.value || Number(targetInput.value) <= 0 ? 0 : Number(targetInput.value) - 1;
  targetInput.value = newValue;

  const quantitySelector = e.target.closest(".quantity-selector");
  const article = quantitySelector.closest(".articulos__articulo");
  setTotalPrice(article, newValue);
}


function setTotalPrice(article, value) { 
  const funkoPrice = parseInt(article.querySelector(".price-container p").innerText.split("$")[1]);
  const totalPrice = funkoPrice * value;
  let totalPriceContainer = article.querySelector(".total-price-container p");
  totalPriceContainer.innerText = "$" + totalPrice;
}

function inputChange(e) {
  const input = e.target;
 console.log("Input change");
}

quantityInputs.forEach((quantityInput) => {
  quantityInput.type = "number";
  quantityInput.value = 0;
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