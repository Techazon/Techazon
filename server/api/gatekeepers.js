const {
  models: { User },
} = require("../db");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};

const isAdmin = (req, res, next) => {
  console.log(req.user)
  if (req.user.role !=="Admin") {
    res.status(403).send("unauthorized");
  } else {
    next();
  }
};

module.exports = {
  requireToken,
  isAdmin,
};
