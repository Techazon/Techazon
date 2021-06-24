const {
  models: { User },
} = require("../db");
const Cart = require("../db/models/cart");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};

const isAdmin = (req, res, next) => {

  if (req.user.role !== "Admin") {
    res.status(403).send("unauthorized");
  } else {
    next();
  }
};

const hasPermission = (req, res, next) => {
  if (req.user.role === "Admin" || req.user.id === +req.params.userid){
    next()
  } else {
    res.status(403).send("unauthorized")
  }
};

const checkActiveCart = async (req, res, next) => {
  const activeCart = await Cart.findOne({ where: { status: "ACTIVE", userId: req.user.id} })
  if (activeCart) {
    res.send('User already has an active cart!')
  } else {
    next()
  }
};

module.exports = {
  requireToken,
  isAdmin,
  checkActiveCart,
  hasPermission
};
