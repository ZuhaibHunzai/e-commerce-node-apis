const Category = require("../../models/category/category");

module.exports = async (req, res, next) => {
  try {
    const { categoryName } = req.body;
    if (!categoryName) {
      return res.status(400).json({
        message: "category name missing",
      });
    }

    const addCategory = new Category({
      categoryName,
    });
    await addCategory.save();
    res.status(200).json(addCategory);
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};
