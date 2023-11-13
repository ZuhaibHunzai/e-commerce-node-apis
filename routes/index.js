const indexRouter = require("express").Router();
const authRouter = require("./auth");

// api/auth
indexRouter.use("/auth", authRouter);
indexRouter.use("/products", require("./products"));
indexRouter.use("/user", require("./user"));
indexRouter.use("/admin", require("./category"));

module.exports = indexRouter;
