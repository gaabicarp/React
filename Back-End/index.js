const express = require("express");
require("dotenv").config();
require("./functions/database");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/city", require("./routes/routerCiudades"));

app.listen(process.env.PORT, () =>
  console.log("Listening on PORT " + process.env.PORT)
);
