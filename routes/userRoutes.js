const express = require('express');
const {
    register,
    login,
    getProfile,
    updateProfile
} = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', authMiddleware, getProfile);
router.put('/:id', authMiddleware, updateProfile);

module.exports = router;
