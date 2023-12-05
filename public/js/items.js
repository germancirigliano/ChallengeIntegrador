const quantityInput = document.querySelector('.quantity--selector__input');
const addbtn = document.querySelector('.add-btn');
const subbtn = document.querySelector('.substract-btn');
const addCart = document.querySelectorAll('.add-cart');
const countCart = document.querySelector('.count-cart');

addbtn.addEventListener('click', ()=> quantityInput.value = Number(quantityInput.value) + 1);
subbtn.addEventListener('click', ()=> quantityInput.value<=0 ? 0 : quantityInput.value = Number(quantityInput.value) - 1);

let count = 0;
addCart.forEach(valor => {
  valor.addEventListener('click',()=>{
  count+= Number(quantityInput.value);
  countCart.innerText = count;
  })
})