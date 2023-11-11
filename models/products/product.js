const { Schema, model } = require("mongoose");

const UploadProductSchema = new Schema({
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
});

module.exports = model("Product", UploadProductSchema);
