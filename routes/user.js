const userRouter = require("express").Router();

const { addToCart, deleteFromCart } = require("../controllers/user/index");
const useAuth = require("../middleware/useAuth");

userRouter
  .post("/add-to-cart", useAuth, addToCart)
  .delete("/remove-from-cart/:cartId", useAuth, deleteFromCart);

module.exports = userRouter;
