const router = require("express").Router();
const {
  models: { Cart, User, Product },
} = require("../db");
const CartProduct = require("../db/models/cartProduct");
const { requireToken, checkActiveCart, isAdmin } = require("./gatekeepers");

//Create new cart
router.post("/", requireToken, async (req, res, next) => {
  try {
    const cart = await Cart.create(req.body);
    cart.setUser(req.user);
    res.status(201).send(cart);
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
  "/addProduct", requireToken, async (req, res, next) => {
    try {
      const { quantity, id, cartId } = req.body
      const cartProduct = await CartProduct.create({cartId, quantity, productId: id});
      res.sendStatus(201);
    } catch (err) {
      next(err);
    }
  }
);

//Update cart products
router.put("/", requireToken, async (req, res, next) => {
    try {
      const cartData = await CartProduct.update(req.body,
        {
          where: {
            cartId: req.body.cartId,
            productId: req.body.productId,
          },
        }
      );
      res.status(201)
    } catch (err) {
      next(err);
    }
  }
);

//GET carts/activeCart

router.get("/activeCart", requireToken, async (req, res, next) => {
  try {
    const carts = await Cart.findOne({
      where: {
        userId: req.user.id,
        status: "ACTIVE",
      },
      include: [{ model: Product, required: false }],
    });
    !carts ? res.sendStatus(404) : res.json(carts);
  } catch (err) {
    console.log('error caught in route')
    next(err);
  }
});


module.exports = router;
