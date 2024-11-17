const Order = require('../models/Order');

// Place an order
exports.placeOrder = async (req, res) => {
    try {
        const { items, totalAmount } = req.body;
        const order = await Order.create({ userId: req.user.id, items, totalAmount });
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: 'Failed to place order' });
    }
};

// Get all orders
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};

// Get single order
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch order' });
    }
};

// Cancel order
exports.cancelOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to cancel order' });
    }
};
