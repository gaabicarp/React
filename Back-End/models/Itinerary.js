const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    city_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Ciudad"},
    raiting: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    hashtags: {
        type:String,
        requiered: true
    }
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;