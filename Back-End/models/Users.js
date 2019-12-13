const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    method: {
        type: String,
        enum: ['local', 'google'],
        required: true
    },
    local: {
        Email: {
            type: String,
            lowercase: true
        },
        UserName: {
            type: String,
        },
        Password: {
            type: String,
        },
        profileImage: {
            type: String,
        }
    },
    google: {
        id: {
            type: String
        },
        Email: {
            type: String,
            lowercase: true
        },
        profileImage: {
            type: String
        }
    }
});

userSchema.pre('save',function(next){
    if (this.method !=='local'){
        next();
    }
    bcrypt.genSalt(10).then(salts =>{
        bcrypt.hash(this.local.Password, salts).then(hash =>{
            this.local.Password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error))
});

const User = mongoose.model("User", userSchema);

module.exports = User;