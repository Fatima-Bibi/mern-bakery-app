// Import mongoose
const mongoose = require('mongoose');

// Create a schema for the Product model
const productSchema = new mongoose.Schema({
  cakeImage: { type: String, required: true },
  cakeTitle: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  weight: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

// Create the Product model using the schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model
module.exports = Product;
