const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    Fistname: {
        type: String,
        required: false
    },
    Lastname: {
        type: String,
        required: false
    },
    Email: {
        type: String,
        unique: true,
        required: true
    },
    UserName: {
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    }
});

userSchema.pre('save',function(next){
    bcrypt.genSalt(10).then(salts =>{
        bcrypt.hash(this.Password, salts).then(hash =>{
            this.Password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error))
});

const User = mongoose.model("User", userSchema);

module.exports = User;