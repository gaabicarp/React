const express = require("express");
const ItineraryController = require("../controllers/itineraryControllers");

const router = express.Router();

router
    .route("/Itinerary")
    .get(ItineraryController.listarItinerary)
    .post(ItineraryController.cargarItinerary);



    
module.exports = router;