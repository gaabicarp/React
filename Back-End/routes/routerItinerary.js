const express = require("express");
const ItineraryController = require("../controllers/itineraryControllers");

const router = express.Router();

router
  .route("/all")
  .get(ItineraryController.listarItinerary)
  .post(ItineraryController.cargarItinerary);

router.route("/:id").get(ItineraryController.listarUno);

module.exports = router;
