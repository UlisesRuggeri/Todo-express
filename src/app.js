const express = require("express");
const app = express();
//path nos permite concatenar mejor las rutas
const path = require("path");
//
const morgan = require("morgan");

//setting:
app.set("port", 5000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlwares:
app.use(morgan("dev"));
//la siguiente linea de codigo dice que puede entender
//los datos que vienen de un json(o formulario)
app.use(express.urlencoded({ extended: false }));

//routes:
app.use(require("./routes/index"));

//static:
app.use(express.static(path.join(__dirname, "public")));

//error 404:
app.use((require, response, next) => {
  response.status(404).send("Error 404: page not found");
});
module.exports = app;
