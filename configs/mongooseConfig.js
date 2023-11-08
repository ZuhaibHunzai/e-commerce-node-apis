const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connected");
  } catch (err) {
    console.log("Error connecting to database");
  }
};

module.exports = { connect };
