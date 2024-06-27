const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
module.exports.register = async function (req, res) {
    try {
        const { email, password, name } = req.body;
        const user = new User({ email, password, name });
        await user.save();
        res.status(200).json({
            success: true,
            message: 'User registered successfully',
            user: user
        });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email and password'
            });
        }
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }
        const token = user.getSignedJwtToken();
        res.status(200).json({
            success: true,
            message: 'Login successful',
            token: token
        });
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
}

module.exports.getUserDetails = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access'
            });
        }
        res.status(200).json({
            success: true,
            data: req.user
        });
    } catch (err) {
        console.error('Error fetching user details:', err);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
}
