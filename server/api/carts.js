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
  "/addProduct", requireToken, async (req, res, next) => {
    try {
      const { quantity, id, cartId } = req.body
      // console.log('req.body -->', req.body)
      const cartProduct = await CartProduct.create({cartId, quantity, productId: id});
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
    console.log(carts);
    !carts ? res.sendStatus(404) : res.json(carts);
  } catch (err) {
    console.log('error caught in route')
    next(err);
  }
});


module.exports = router;
