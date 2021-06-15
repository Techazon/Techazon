const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
      productName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            min: 0.01
        }
      },
      description: {
        type: Sequelize.TEXT,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
      }
})

module.exports = Product