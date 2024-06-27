const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.MONGO_DB;
mongoose.connect(DB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error in connecting to the database'));
db.once('open', function () {
    console.log('Successfully connected to the database');

});
module.exports = db;