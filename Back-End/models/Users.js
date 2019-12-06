const mongoose = require("mongoose");

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
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }  
});

const User = mongoose.model("User", userSchema);

module.exports = User;