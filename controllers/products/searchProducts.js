const Product = require("../../models/products/product");

module.exports = async (req, res, next) => {
  try {
    const searchTerm = req.params.term;

    if (!searchTerm) {
      return res.status(400).json({ message: "Please provide a search term" });
    }

    const regex = new RegExp(searchTerm, "i");

    const foundProducts = await Product.find({ productName: regex });

    if (foundProducts.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found with the given name" });
    }

    res.status(200).json(foundProducts);
  } catch (err) {
    res.status(500).json({ message: err.message || "something went wrong" });
  }
};
