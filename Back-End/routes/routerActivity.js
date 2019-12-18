const express = require("express");
const activityController = require("../controllers/activityController");
const router = express.Router();
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/Act'),
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
  .route("/")
  .get(activityController.listarActivity)
  .post(upload.single('imgAct'),activityController.cargarActivity);

  module.exports = router;