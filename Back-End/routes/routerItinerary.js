const express = require("express");
const ItineraryController = require("../controllers/itineraryControllers");
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/img/Itinerary'),
  filename: function(req,file,cb){
      cb(null, file.originalname);
  }
});

const fileFilter = (req,file,cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
      cb(null,true);
  }else{
      cb(null,false);
  }
}

const upload = multer({
  storage: storage,
  limits:{
  fileSize: 1024 * 1024 * 5
  },
  fileFilter
});

router
  .route("/all")
  .get(ItineraryController.listarItinerary)
  .post(upload.single('itineraryimage'),ItineraryController.cargarItinerary);

router.route("/:id").get(ItineraryController.listarUno);

module.exports = router;
