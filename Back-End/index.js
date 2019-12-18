const express = require("express");
require('./passport');
require("dotenv").config();
require("./functions/database");
const cors = require("cors");
const passport = require('passport')
const app = express();
const multer = require('multer');
const path = require('path')



//Middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
//Routes
app.use("/city", require("./routes/routerCiudades"));
app.use("/Itinerary", require("./routes/routerItinerary"));
app.use("/user", require("./routes/routerUser"));
app.use("/auth", require("./routes/auth"));
app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT, () => console.log("Listening on PORT " + process.env.PORT));
