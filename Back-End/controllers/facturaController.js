const Ciudad = require('../models/City')

const facturaController = {
    listarPaises: (req, res) =>{res.send("Petición GET")},
    cargarAlgo: (req, res) =>{res.send("Peticion POST")},
    BorrarAlgo: (req, res) =>{res.send("Peticion DELETE")},
    ModificarAlgo: (req, res) =>{res.send("Peticion PUT")}
}

module.exports = facturaController