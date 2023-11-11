const userRouter = require("express").Router();

const addToCart = require("../controllers/user/addToCart");
const useAuth = require("../middleware/useAuth");

userRouter.post("/my-cart", useAuth, addToCart);

module.exports = userRouter;
