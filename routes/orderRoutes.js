const express = require('express');
const {
    placeOrder,
    getOrders,
    getOrderById,
    cancelOrder
} = require('../controllers/orderController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, placeOrder);
router.get('/', authMiddleware, getOrders);
router.get('/:id', authMiddleware, getOrderById);
router.delete('/:id', authMiddleware, cancelOrder);

module.exports = router;
