const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'pending' },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields.

module.exports = mongoose.model('Order', orderSchema);
