const categoryRouter = require("express").Router();

const {
  addCategory,
  deleteCategory,
  updateCategory,
  getAllCategories,
} = require("../controllers/category");
const useAuth = require("../middleware/useAuth");

categoryRouter
  .post("/category/add-category", useAuth, addCategory)
  .post("/category/update-category", useAuth, updateCategory)
  .delete("/category/delete-category/:categoryId", useAuth, deleteCategory)
  .get("/category/all", useAuth, getAllCategories);

module.exports = categoryRouter;
