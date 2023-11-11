const { model, Schema } = require("mongoose");

const User = model(
  "User",
  new Schema({
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    cart: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Products",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  })
);

module.exports = User;
