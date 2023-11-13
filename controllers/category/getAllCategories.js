const Categories = require("../../models/category/category");

module.exports = async (req, res, next) => {
  try {
    const categories = req;
    if (!categories) {
      return res
        .status(404)
        .json({ message: err.message || "categories not found" });
    }
    const allCategories = await Categories.find({});
    res.status(200).json({ allCategories });
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message || "something went wrong" });
  }
};
