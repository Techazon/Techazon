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

Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Payment);
Payment.belongsTo(User);

Payment.hasMany(Cart);
Cart.belongsTo(Payment);

Payment.hasOne(Address);
Address.belongsTo(Payment);

Cart.belongsToMany(Product, {through: 'cart_product'})
Product.belongsToMany(Cart, {through: 'cart_product'})


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
