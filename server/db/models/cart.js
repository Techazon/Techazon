const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
      status: {
        type: Sequelize.ENUM('ACTIVE', 'ABANDONED', 'COMPLETE'),
        allowNull: false,
        defaultValue: 'ACTIVE'
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      tax: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      shipping: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
})

module.exports = Cart