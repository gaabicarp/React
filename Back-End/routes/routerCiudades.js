const express = require("express");
const ciudadesController = require("../controllers/ciudadesController");

const router = express.Router();

router
  .route("/all")
  .get(ciudadesController.listarCiudades)
  .post(ciudadesController.cargarCiudad);

router
  .route('/:name')
  .get(ciudadesController.listarUno);


module.exports = router;
