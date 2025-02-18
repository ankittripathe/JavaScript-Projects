const updateCart = document.querySelector("#cart-summery");
const add2CartBtn = document.getElementById("add2bag-btn");
const remove2wishBtn = document.getElementById("wish-btn");
const getOneFreeBtn = document.getElementById("getOnefree-btn");

let cartQuantity = 0;

add2CartBtn.addEventListener("click", () => {
  cartQuantity = cartQuantity + 1;
  updateCart.innerText = `Your Bag has ${cartQuantity} items`;
});

remove2wishBtn.addEventListener("click", () => {
  if (cartQuantity > 0) {
    cartQuantity = cartQuantity - 1;
  }
  updateCart.innerText = `Your Bag has ${cartQuantity} items`;
});

getOneFreeBtn.addEventListener("click", () => {
  cartQuantity = cartQuantity + 2;
  updateCart.innerText = `Your Bag has ${cartQuantity} items`;
});
