const User = require('./user')
const Address = require('./address')
const Cart = require('./cart')
const CartProduct = require('./cartProduct')
const Payment = require('./payment')
const Category = require('./category')
const Product = require('./product')
const db = require('../db.js')

// Associations

User.hasMany(Address)
Address.belongsTo(User)

User.hasMany(Cart)
Cart.belongsTo(User)

Product.belongsToMany(Category, {through: 'Product_Category'})
Category.belongsToMany(Product, {through: 'Product_Category'})

User.hasMany(Payment)
Payment.belongsTo(User)

Payment.hasMany(Cart)
Cart.belongsTo(Payment)

Payment.hasOne(Address)
Address.belongsTo(Payment)

// Cart.hasMany(CartProduct)
// CartProduct.belongsTo(Cart)

// CartProduct.belongsToMany()
// Product.belongsToMany()

// Product.hasMany(CartProduct)
// CartProduct.belongsTo(Product)

const products = {
    "cartid": 4,
    "cartProducts": [
      {
        "productId": 6,
        "CartProduct": {
          "productId": 4,
          "productName": 6,
          "stuff": false,
          "quantity": 0
        }
      }
    ]
  }

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
    User,
    Address,
    Cart,
    CartProducts,
    Payment,
    Product,
    Category,
    db
}