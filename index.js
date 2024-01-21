import express from "express";
import json from "body-parser";
import tareasRouter from "./routes/tareasRoutes.js";
import db from "./config/db.js";

const app = express();
app.use(json());

app.use(tareasRouter);

try {
  await db.authenticate();
  await db.sync();
  console.log("Conexion correcta a la base de datos");
} catch (error) {
  console.log("Error al conectarse a la base de datos", error.message);
}

app.listen(3000, () => {
  console.log("Aplicacion ejecutandose en el puerto 3000");
});