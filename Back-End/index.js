const express = require("express");
require("dotenv").config();
require("./functions/database");
const cors = require("cors");

const app = express();



//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/city", require("./routes/routerCiudades"));
app.use("/Itinerary", require("./routes/routerItinerary"));
app.use("/user", require("./routes/routerUser"));


app.listen(process.env.PORT, () => console.log("Listening on PORT " + process.env.PORT));
