//this is the access point for all things database related!

const User = require("./models/user");
const Address = require("./models/address");
const Cart = require("./models/cart");
const CartProduct = require("./models/cartProduct");
const Payment = require("./models/payment");
const Category = require("./models/category");
const Product = require("./models/product");
const db = require("./db");

// Associations

User.hasMany(Address);
Address.belongsTo(User);

User.hasMany(Cart);
Cart.belongsTo(User);

// Product.belongsToMany(Category, {through: 'Product_Category'})
// Category.belongsToMany(Product, {through: 'Product_Category'})

Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Payment);
Payment.belongsTo(User);

Payment.hasMany(Cart);
Cart.belongsTo(Payment);

Payment.hasOne(Address);
Address.belongsTo(Payment);

// Cart.hasMany(CartProduct)
// CartProduct.belongsTo(Cart)

// CartProduct.belongsToMany()
// Product.belongsToMany()

// Product.hasMany(CartProduct)
// CartProduct.belongsTo(Product)

const products = {
  cartid: 4,
  cartProducts: [
    {
      productId: 6,
      CartProduct: {
        productId: 4,
        productName: 6,
        stuff: false,
        quantity: 0,
      },
    },
  ],
};

// /api/:userId/:cartID/:cartProductId
/*
CartID | CartProductID | ProductID | Quantity
1           1               1           2
1           2               2           1
1           3               3           5
____________________________________________
2           4               3           2
2           5               2           2
2           6               1           2


*/

// const cart = {
//     "products" : [
//         {
//             "productId": 1,
//             "product": {
//                 "productId": 1,
//                 "prodName": "keyboard"
//             },
//             "quantity": 3
//         }
//     ]
// }

// const prod = Product.create(sa;lkfjd;lkas)
// const category = Category.create(fasdfasdf)
// prod.addCategory(category)

module.exports = {
  db,
  models: {
    User,
    Address,
    Cart,
    CartProduct,
    Payment,
    Product,
    Category,
  },
};

//associations could go here!

// module.exports = {
//   db,
//   models: {
//     User,
//   },
// }
