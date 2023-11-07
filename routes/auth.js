const authRouter = require("express").Router();
const meController = require("../controllers/auth/me");
const registerController = require("../controllers/auth/register");
const loginController = require("../controllers/auth/login");

const useAuth = require("../middleware/useAuth");
// api/
// authRouter.get("/me", (req, res, next) => {});
// authRouter.post("/login", (req, res, next) => {});
authRouter
  .get("/me", useAuth, meController)
  .post("/login", loginController)
  .post("/register", registerController);

module.exports = authRouter;
