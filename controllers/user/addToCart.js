const User = require("../../models/user/User");

module.exports = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
      return res
        .status(400)
        .json({ message: "Product and quantity are required" });
    }

    const userId = req.user.userData._id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const existingProductIndex = user.cart.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingProductIndex !== -1) {
      user.cart[existingProductIndex].quantity += quantity;
    } else {
      user.cart.push({ productId, quantity });
    }

    await user.save();

    res
      .status(200)
      .json({ message: "Product added to the cart successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};
