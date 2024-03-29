const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true,
    unique: [true, "This File name is aleady exist"],
  },
  name: {
    type: String,
    required: [true, "title address is required"],
  },
  category: {
    type: String,
    required: [true, "Pleases mention Category"],
  },
  description: {
    type: String,
    required: [true, "Please write Description"],
  },
  productInfoId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  showProduct: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
