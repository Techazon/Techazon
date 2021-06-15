const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
      streetAddress1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      streetAddress2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      City: {
        type: Sequelize.STRING,
        allowNull: false
      },
      State: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2],
            isUppercase: true
        }
      },
      Zip: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressType: {
          type: Sequelize.ENUM('BILLING', 'MAILING'),
          allowNull: false
      }
})

module.exports = Address

