const router = require("express").Router();
const {
  models: { User, Cart, Product },
} = require("../db");
const CartProduct = require("../db/models/cartProduct");
const { requireToken, isAdmin, hasPermission } = require("./gatekeepers");
module.exports = router;

router.get("/", requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // attributes: ["id", "firstName"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//GET users/:userid/activeCart

router.get("/:userid/activeCart", requireToken, hasPermission, async (req, res, next) => {
  try {
    const carts = await Cart.findOrCreate({
      where: {
        userId: req.params.userid,
        status: "ACTIVE",
      },
      include: Product,
    });

    res.json(carts);
  } catch (err) {
    next(err);
  }
});
