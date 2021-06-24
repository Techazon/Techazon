export const cartFuncs = {
  clickAddToCart(prod) {
    if (!prod.quantity) prod.quantity = 1
    // function handles adding product to a cart or updating quantity if product is already in a cart
    const { id, imageUrl, price, productName, quantity, description, category } = prod;
    let cartInfo = JSON.parse(localStorage.getItem("cart"));
    let categoryName = category.categoryName;

    let currentProd = cartInfo.find(prod => prod.id === id)
    if (!currentProd) {
        cartInfo.push({ id, imageUrl, price, productName, quantity, description, categoryName })
    } else {
        currentProd.quantity += Number(quantity);
    }
    localStorage.setItem("cart", JSON.stringify(cartInfo));
  }
};
