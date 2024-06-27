const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// Import other necessary modules
const passport = require("passport");
const passportJWT = require("./config/passport-jwt_stratergy");
const db = require("./config/mongoose");

// Use CORS middleware with permissive settings
app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/", require("./routes"));

app.listen(port, function (err) {
    if (err) {
        console.log('Error in connecting to the server');
    } else {
        console.log(`Successfully connected to the server and running at port: ${port}`);
    }
});
