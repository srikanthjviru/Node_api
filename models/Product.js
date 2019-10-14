const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  subtitle: { type: String, required: false },
  keywords: { type: [String], required: false },
  age: { type: [String], required: false },
  price: { type: String, required: false },
  priceDiscounted: { type: String, required: false },
  image: { type: String, required: false },
  _id: { type: String, required: false }
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
