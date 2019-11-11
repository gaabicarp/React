const express = require('express');
const paisesController = require('../controllers/facturaController')

const router = express.Router();

router.route('/barcelona')
.get(paisesController.listarPaises)
.post(paisesController.cargarAlgo)

router.route('/barcelona/:id')
.delete(paisesController.BorrarAlgo)
.put(paisesController.ModificarAlgo)

module.exports = router