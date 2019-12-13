const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = require("./models/Users");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "myitinerary";

passport.use(
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

// GOOGLE STRATEGY

passport.use(new GoogleStrategy({
    clientID: '12194280660-7f0s85enas5qcpn9h8b9vab446si0jr9.apps.googleusercontent.com',
    clientSecret: 'e9sSMk-xg5i8L-EPPLRfcevZ',
    callbackURL: "http://localhost:4000/auth/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try{
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);
    
        const existinUser = await User.findOne({"google.id": profile.id});
        if (existinUser){
            return done(null, existinUser);
        }
    
        const newUser = new User({
            method: 'google',
            google: {
                id: profile.id,
                Email: profile.emails[0].value,
                profileImage: profile.photos[0].value
            }
        })
    
        await newUser.save();
        done(null, newUser);

    }catch (err) {
        console.error(err)

}}))

module.exports = passport;