const Sequelize = require('sequelize')
const db = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const axios = require('axios');
const { validate } = require('../db');

const Payment = db.define('payment', {
    cardType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cardNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cardCvv: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Payment