const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
const dotenv = require("dotenv");
dotenv.config();

exports.verifyToken = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        console.log('Token received:', token);
        req.token = token;
    }
    if (!token) {
        console.log('Token error');
        return res.status(401).json({
            success: false,
            message: 'Unauthorized access - No token provided'
        });
    }
    try {
        console.log("TOKEN:", token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded Token:', JSON.stringify(decoded));

        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access - User not found'
            });
        }

        next();
    } catch (err) {
        console.log('JWT Verification Error:', err);
        return res.status(401).json({
            success: false,
            message: 'Unauthorized access - Invalid token'
        });
    }
};
