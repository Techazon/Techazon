const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
      status: {
        type: Sequelize.ENUM('NEW', 'ACTIVE', 'ABANDONED', 'COMPLETE'),
        allowNull: false
      },
      total: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      tax: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      shipping: {
        type: Sequelize.DECIMAL,
        allowNull: false
      }
})

module.exports = Cart