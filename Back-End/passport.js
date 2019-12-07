const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = require("./models/Users");
const passport = require('passport');
const key = process.env.SECRET_TOKEN
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "myitinerary";

module.exports = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) =>{
        User.findById(jwt_payload.id)
        .then(user =>{
            if (user) {
                return done(null, user);
            }
            return done(null,false);
        })
        .catch(err => console.log(err));
    })
)