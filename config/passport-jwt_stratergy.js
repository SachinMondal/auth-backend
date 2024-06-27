const passport = require("passport");
const JWTStratergy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const User = require("../model/userModel");
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

passport.use(new JWTStratergy(opts, function (jwtpayload, done) {
    User.findById(jwtpayload.id, function (err, user) {
        if (err) {
            console.log('error in finding the user from jwt');
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false)
        }
    });
}));

module.exports = passport;