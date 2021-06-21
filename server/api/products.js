const router = require('express').Router();
const {
  models: { Product, Category },
} = require('../db');
const { requireToken, isAdmin } = require('./gatekeepers');
module.exports = router;

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: Category,
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// POST /api/products
router.post('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id, {
      include: Category,
    });
    res.json(singleProduct);
  } catch (err) {
    next(err);
  }
});

// PUT /api/products/:id
router.put('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id);
    res.send(await singleProduct.update(req.body));
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products/:id
router.delete('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id);
    res.send(await singleProduct.destroy());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
