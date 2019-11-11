const mongoose = require('mongoose')

const ciudadesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

const Ciudad = mongoose.model('Ciudad', ciudadesSchema)

module.exports = Ciudad