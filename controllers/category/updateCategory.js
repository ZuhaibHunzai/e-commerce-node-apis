const Category = require("../../models/category/category");

module.exports = async (req, res) => {
  try {
    const { categoryName, categoryId } = req.body;

    if (!categoryId) {
      return res.status(400).json({ message: "category ID is required" });
    }

    const updatedFields = {};
    if (categoryName) updatedFields.categoryName = categoryName;

    const updatedProduct = await Category.findByIdAndUpdate(
      categoryId,
      updatedFields,
      {
        new: true,
      }
    );

    if (!updatedProduct)
      return res.status(404).json({ message: "category not found" });

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};
