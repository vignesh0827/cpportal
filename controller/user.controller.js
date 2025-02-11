const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.register = async (req, res) => {
    try {
        const { email, firstName, lastName, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in the database
        const user = await User.create({
            email,
            firstName,
            lastName,
            password: hashedPassword,
            role
        });

        // Generate JWT token
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Store token in the database
        await user.update({ token });

        res.status(201).json({
            message: 'User Registered Successfully!',
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: user.token
            }
        });

    } catch (error) {
        res.status(500).json({ message: 'Error Registering User', error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid Email or Password' });
        }

        // Generate a new JWT token
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Update user's token in the database
        await user.update({ token });

        res.json({
            message: 'Login Successful',
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: user.token
            }
        });

    } catch (error) {
        res.status(500).json({ message: 'Login Failed', error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({ attributes: { exclude: ['password'] } });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Users', error: error.message });
    }
};
