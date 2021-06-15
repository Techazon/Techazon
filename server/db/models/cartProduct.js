const Sequelize = require('sequelize')
const db = require('../db')

const CartProduct = db.define('cartproduct', {
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    }
})

module.exports = CartProduct

