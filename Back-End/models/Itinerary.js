const mongoose = require('mongoose')
var Ciudad = mongoose.model('Ciudad')

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
        type: mongoose.Schema.ObjectId, 
        ref: "Ciudad",
    required: true},
    raiting: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    hashtags: {
        type:String,
        requiered: true
    }
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;