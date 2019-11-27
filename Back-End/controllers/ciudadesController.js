const Ciudad = require("../models/City");

const ciudadesController = {
  listarCiudades: async (req, res) => {
    const data = await Ciudad.find();
    res.json({ respuesta: data });
  },
  listarUno: async (req,res) => {
    let cityRequested = req.params.name;
  Ciudad.findOne({ ciudad: cityRequested })
  .then(ciudad => {
    res.send(ciudad)
  })
  .catch(err => console.log(err));
  },
  cargarCiudad: async (req, res) => {
    var ciudad = req.body.ciudad;
    var pais = req.body.pais;
    const nuevaCiudad = new Ciudad({
      ciudad: ciudad,
      pais: pais
    });

    await nuevaCiudad.save();
    res.send("Nueva ciudad agregada");
  }
};

module.exports = ciudadesController;