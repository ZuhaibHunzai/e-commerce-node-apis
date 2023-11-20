const User = require("../../models/user/User");

module.exports = async (req, res, next) => {
  try {
    const userId = req.user.userData._id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const cartItems = user.cart;

    res.status(200).json({ cartItems });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};
