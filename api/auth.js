const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const storage = require('./storage');

const JWT_SECRET = process.env.JWT_SECRET || 'ndy-secret-key-2026';

// Middleware to verify token
function verifyToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ error: 'Failed to authenticate token' });
        req.user = decoded;
        next();
    });
}

// Login
router.post('/login', async (req, res) => {
    const { loginId, password } = req.body;

    try {
        const user = await storage.getUser(loginId);
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign({
            id: user.id,
            loginId: user.loginId,
            name: user.name,
            role: user.role,
            affiliationId: user.affiliationId,
            affiliationName: user.Affiliation?.name
        }, JWT_SECRET, { expiresIn: '12h' });

        res.json({ token, user: { name: user.name, role: user.role } });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get Current User info
router.get('/me', verifyToken, async (req, res) => {
    const user = await storage.getUser(req.user.loginId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json({
        id: user.id,
        loginId: user.loginId,
        name: user.name,
        role: user.role,
        affiliationId: user.affiliationId,
        affiliationName: user.Affiliation?.name
    });
});

module.exports = { router, verifyToken, bcrypt };
