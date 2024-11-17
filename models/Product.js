const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields.

module.exports = mongoose.model('Product', productSchema);
