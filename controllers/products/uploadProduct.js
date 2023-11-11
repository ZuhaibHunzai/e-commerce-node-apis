const Product = require("../../models/products/product");

module.exports = async (req, res, next) => {
  try {
    const { productImage, productName, productPrice, productDescription } =
      req.body;
    if (!productImage || !productName || !productPrice || !productDescription) {
      return res.status(400).json({
        message: "invalid  payload",
      });
    }

    const UploadProduct = new Product({
      productImage,
      productName,
      productPrice,
      productDescription,
    });
    await UploadProduct.save();
    res.status(200).json(UploadProduct);
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};
