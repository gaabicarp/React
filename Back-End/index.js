const express = require("express");
require("dotenv").config();
require("./functions/database");
const cors = require("cors");
var formidable = require("express-formidable");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/city", require("./routes/routerCiudades"));
app.use("/Itinerary", require("./routes/routerItinerary"));
app.use(formidable.parse({keepExtensions:true}))
app.listen(process.env.PORT, () => console.log("Listening on PORT " + process.env.PORT));
