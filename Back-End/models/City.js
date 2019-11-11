const mongoose = require("mongoose");

const ciudadesSchema = new mongoose.Schema({
  ciudad: {
    type: String,
    required: true
  },
  pais: {
    type: String,
    required: true
  }
});

const Ciudad = mongoose.model("Ciudad", ciudadesSchema);

module.exports = Ciudad;
