export const cartFuncs = {
  clickAddToCart(prod) {
    // function handles adding product to a cart or updating quantity if product is already in a cart
    if (!prod.quantity) {
      prod.quantity = 1;
    }
    const { id, imageUrl, price, productName, quantity, category } = prod;
    let cartInfo = JSON.parse(localStorage.getItem("cart"));
    let categoryName = category.categoryName;
    if (!cartInfo[id]) {
      cartInfo[id] = { imageUrl, price, productName, quantity, categoryName };
    } else {
      cartInfo[id].quantity += Number(quantity);
    }
    localStorage.setItem("cart", JSON.stringify(cartInfo));
  },

  clickQuantity(event, product) {
    product.quantity = Number(event.target.value);
  },
};
