const Products = require("../../models/products/product");

module.exports = async (req, res, next) => {
  try {
    const products = req;
    if (!products) {
      return res
        .status(404)
        .json({ message: err.message || "Products not found" });
    }
    const allProducts = await Products.find({});
    res.status(200).json({ allProducts });
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message || "something went wrong" });
  }
};
