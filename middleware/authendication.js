const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.authenticateUser = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access Denied! No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findByPk(decoded.id);

        if (!req.user) {
            return res.status(401).json({ message: 'User not found.' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};

// Role-Based Access Control
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access Denied! Insufficient Permissions.' });
        }
        next();
    };
};
