const router = require("express").Router();
const {
  models: { Cart, User, Product },
} = require("../db");
const CartProduct = require("../db/models/cartProduct");
const { requireToken, checkActiveCart, isAdmin } = require("./gatekeepers");

//Create new cart
router.post("/", requireToken, checkActiveCart, async (req, res, next) => {
  try {
    const cart = await Cart.create(req.body);
    cart.setUser(req.user);
    res.status(201).send(cart.data);
  } catch (err) {
    next(err);
  }
});

/* Need to implement permissions function, for now, will just ask for token */
//Get all carts
router.get("/", requireToken, isAdmin, async (req, res, next) => {
  try {
    const carts = await Cart.findOne({
      include: Product,
    });
    res.send(carts);
  } catch (err) {
    next(err);
  }
});

//Create cart products
router.post(
  "/:id",
  /* Need to implement permissions function */ async (req, res, next) => {
    try {
      const cartProduct = await CartProduct.create(req.body);
      res.send(cartProduct);
    } catch (err) {
      next(err);
    }
  }
);

//Update cart products
router.put(
  "/:id/:productId",
  /* Need to implement permissions function */ async (req, res, next) => {
    try {
      const cartId = req.params.id;
      const productId = req.params.productId;
      await CartProduct.update(
        { quantity: req.body.quantity },
        {
          where: {
            cartId,
            productId,
          },
        }
      );
      res.status(201).send('success')
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
