const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
      status: {
        type: Sequelize.ENUM('NEW', 'ACTIVE', 'ABANDONED', 'COMPLETE'),
        allowNull: false
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tax: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shipping: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
})

module.exports = Cart