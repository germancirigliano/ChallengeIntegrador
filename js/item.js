const quantityInputs = document.querySelectorAll(".quantity-selector__input");
const addButtons = document.querySelectorAll(".add-button");
const substractButtons = document.querySelectorAll(".substract-button");

function validateInput(e) {
  if (isNaN(this.value) || this.value < 0 || this.value === "") this.value = ""; 
}

function agregaItem(e) {
  let targetInput = e.target.closest(".quantity-selector").querySelector("input");
  targetInput.value = !targetInput.value ? 1 : Number(targetInput.value) + 1;
}
function restaItem(e) {
  let targetInput = e.target.closest(".quantity-selector").querySelector("input");
  targetInput.value = !targetInput.value || Number(targetInput.value) <= 0 ? 0 : Number(targetInput.value) - 1;
}

quantityInputs.forEach((quantityInput) => {
  quantityInput.type = "number";
  quantityInput.value = 0;
  quantityInput.addEventListener("input", validateInput);
});
addButtons.forEach((button) => {
  button.addEventListener("click", agregaItem);
});
substractButtons.forEach((button) => {
  button.addEventListener("click", restaItem);
});