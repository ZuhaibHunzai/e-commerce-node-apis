const { Schema, model } = require("mongoose");

const categories = new Schema({
  categoryName: {
    type: String,
    required: true,
  },
});

module.exports = model("Category", categories);
