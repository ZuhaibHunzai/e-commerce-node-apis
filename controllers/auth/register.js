const bcrypt = require("bcrypt");
const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !password || !email)
      return res.status(400).json({
        message: "invalid payload",
      });
    // TODO: check for existing email and username

    const salt = await bcrypt.genSalt(12);

    const passwordHashed = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: passwordHashed,
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message || "something went wrong" });
  }
};
