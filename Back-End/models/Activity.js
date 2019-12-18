const mongoose = require('mongoose')
var Itinerary = mongoose.model('Itinerary')


const ActivitySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    adress:{
        type: String,
        required: true
    },
    imageAct:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    Itinerary_id:{
        type: mongoose.Schema.ObjectId,
        ref: "Itinerary"
    }
})

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;