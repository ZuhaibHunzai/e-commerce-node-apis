const Category = require("../../models/category/category");

module.exports = async (req, res) => {
  try {
    const { categoryId } = req.params;
    if (!categoryId) {
      res.status(404).json({ message: "category id missing" });
    }
    const category = await Category.deleteOne({ _id: categoryId });
    res.status(200).send({ category });
  } catch (err) {
    res.status(500).json({ message: err.message || "something went wrong" });
  }
};
