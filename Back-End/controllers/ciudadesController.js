const Ciudad = require("../models/City");

const ciudadesController = {
  listarCiudades: async (req, res) => {
    const data = await Ciudad.find();
    res.json({ respuesta: data });
  },
  cargarCiudad: async (req, res) => {
    const nuevaCiudad = new Ciudad({
      ciudad: req.body.ciudad,
      pais: req.body.pais,
      imgCity: '/img/city/' + req.file.filename,
      descr: req.body.descr
    });

    await nuevaCiudad.save();
    res.send("Nueva ciudad agregada");
  }
};

module.exports = ciudadesController;
