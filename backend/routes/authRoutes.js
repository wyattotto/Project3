const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const router = express.Router();

const secretKey = 'mySecretKey';

router.post('/signup', async (req, res) => {
    const { username, password, email, role } = req.body;
    
    try {
        const user = new User({
            username, 
            password, 
            email, 
            role
        });

        await user.save();

        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

        res.json({
            token
        });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        const isValidPassword = await user.isCorrectPassword(password);

        if (!isValidPassword) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

        res.json({
            token
        });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
});

module.exports = router;