const userRouter = require("express").Router();

const {
  addToCart,
  deleteFromCart,
  myCart,
} = require("../controllers/user/index");
const useAuth = require("../middleware/useAuth");

userRouter
  .post("/add-to-cart", useAuth, addToCart)
  .delete("/remove-from-cart/:cartId", useAuth, deleteFromCart)
  .get("/my-cart/:userId", useAuth, myCart);

module.exports = userRouter;
