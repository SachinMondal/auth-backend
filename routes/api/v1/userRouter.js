const express = require("express");
const router = express.Router();
const userController = require("../../../controller/userController");
const { verifyToken } = require("../../../config/middleware");
console.log("User router loaded");
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get("/user", verifyToken, userController.getUserDetails);
module.exports = router;