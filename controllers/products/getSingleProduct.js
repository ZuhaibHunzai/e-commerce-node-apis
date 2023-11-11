const Product = require("../../models/products/product");

module.exports = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById({ _id: productId });
    res.status(200).send({ product });
  } catch (err) {
    res.status(500).json({ message: err.message || "something went   wrong" });
  }
};
