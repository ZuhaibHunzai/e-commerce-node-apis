const indexRouter = require("express").Router();
const authRouter = require("./auth");

// api/auth
indexRouter.use("/auth", authRouter);

module.exports = indexRouter;
