const productsRouter = require("express").Router();

// ** products management controllers
const {
  uploadProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
  getAllProducts,
  getProductById,
} = require("../controllers/products");

// ** middleware
const useAuth = require("../middleware/useAuth");

productsRouter
  .post("/upload-product", useAuth, uploadProduct)
  .post("/update-product/:productId", useAuth, updateProduct)
  .delete("/delete-product/:productId", useAuth, deleteProduct)
  .get("/search-products/:term", useAuth, searchProduct)
  .get("/all", getAllProducts)
  .get("/:productId", getProductById);

module.exports = productsRouter;
