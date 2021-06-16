const router = require('express').Router()
const { models: { Product, Category }} = require('../db')
module.exports = router

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
        include: Category
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})


module.exports = router