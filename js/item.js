// const quantityInputs = document.querySelectorAll(".quantity-selector__input");
const addButtons = document.querySelectorAll(".add-button");
const substractButtons = document.querySelectorAll(".substract-button");

function agregaItem(e) {
  console.log(e);
  let targetInput = e.target.parentElement.parentElement.previousElementSibling;
  targetInput.value = !targetInput.value ? 1 : Number(targetInput.value) + 1;
}
function restaItem(e) {
  console.log(e);
  let targetInput = e.target.parentElement.parentElement.previousElementSibling;
  targetInput.value = !targetInput.value || Number(targetInput.value) <= 0 ? 0 : Number(targetInput.value) - 1;
}

addButtons.forEach((button) => {
  button.addEventListener("click", agregaItem);
});
substractButtons.forEach((button) => {
  button.addEventListener("click", restaItem);
});