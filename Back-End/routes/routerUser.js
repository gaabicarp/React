const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router
    .route("/create")
    .get(userController.listarUser)
    .post(userController.cargarUser);
    

module.exports = router;