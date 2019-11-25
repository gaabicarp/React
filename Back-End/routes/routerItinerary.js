const express = require("express");
const ItineraryController = require("../controllers/itineraryControllers");

const router = express.Router();

router
    .route("/Itinerary")
    .get(ItineraryController.listarItinerary)
    .post(ItineraryController.cargarItinerary);


router
    .route('/:name')
    .get(ItineraryController.listarUno);
    
module.exports = router;