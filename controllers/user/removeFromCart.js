const User = require("../../models/user/User");

module.exports = async (req, res) => {
  try {
    const { cartId } = req.params;
    const { userId } = req.body;

    const result = await User.updateOne(
      { _id: userId },
      { $pull: { cart: { _id: cartId } } }
    );

    if (result.nModified > 0) {
      res
        .status(200)
        .send({ message: "Product removed from the cart successfully" });
    } else {
      res.status(404).send({ message: "Cart item not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};
