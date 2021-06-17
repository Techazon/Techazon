const router = require("express").Router();
const {
  models: { Product, Category },
} = require("../db");
module.exports = router;

// GET /api/products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: Category,
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:id

router.get("/:id", async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id, {
      include: Category,
    });
    res.json(singleProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
