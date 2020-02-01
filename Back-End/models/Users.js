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
    },
    favorites:{
        type: [mongoose.Schema.ObjectId],
        ref: "Itinerary"
    }
});



const User = mongoose.model("User", userSchema);

module.exports = User;