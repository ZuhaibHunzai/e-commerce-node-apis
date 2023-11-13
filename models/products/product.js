const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  productImage: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },

  productPrice: {
    type: String,
    required: true,
  },

  productDescription: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = model("Product", ProductSchema);
