const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const { getJwtConfig } = require("../../configs/auth");

const jwtConfig = getJwtConfig();

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Invalid username or password" });

    //  get user
    const user = (await User.findOne({ email })).toObject();
    if (!user) return res.status(404).json({ message: "User not found" });

    // check password
    const isPassCorrect = await bcrypt.compare(password, user.password);
    if (!isPassCorrect)
      return res.status(400).json({ message: "invalid password" });
    // generate jwt

    const accessToken = jwt.sign({ id: user._id }, jwtConfig.secret, {
      expiresIn: jwtConfig.expirationTime,
    });
    // send response

    delete user.password;

    const resPayload = {
      accessToken,
      userData: user,
    };

    res.status(200).json(resPayload);
  } catch (err) {
    res.status(500).json({ message: err.message || "something went wrong" });
  }
};
