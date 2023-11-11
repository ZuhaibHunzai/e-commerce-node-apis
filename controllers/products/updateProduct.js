const Product = require("../../models/products/product");

module.exports = async (req, res) => {
  try {
    const { productId } = req.params;
    const { productImage, productName, ProductPrice, ProductDescription } =
      req.body;

    console.log(req.params);
    if (!productId) {
      return res.status(400).json({ message: "productId ID is required" });
    }

    const updatedFields = {};
    if (productImage) updatedFields.productImage = productImage;
    if (productName) updatedFields.productName = productName;
    if (ProductPrice) updatedFields.ProductPrice = ProductPrice;
    if (ProductDescription)
      updatedFields.ProductDescription = ProductDescription;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedFields,
      {
        new: true,
      }
    );

    if (!updatedProduct)
      return res.status(404).json({ message: "product not found" });

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};
