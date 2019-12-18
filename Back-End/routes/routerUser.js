const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/user'),
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
    .route("/create")
    .get(userController.listarUser)
    .post(upload.single('imagen'), userController.cargarUser);
    

module.exports = router;