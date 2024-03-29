const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId },
      name: {
        type: String,
      },
      showProduct: {
        type: Boolean,
        default: true,
      },
    },
  ],
  showCategory: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("category", categorySchema);
