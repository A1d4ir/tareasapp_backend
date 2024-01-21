import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import tareasRouter from "./routes/tareasRoutes.js";
import db from "./config/db.js";

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

dotenv.config();

app.use(tareasRouter);

try {
  await db.authenticate();
  await db.sync();
  console.log("Conexion correcta a la base de datos");
} catch (error) {
  console.log("Error al conectarse a la base de datos", error.message);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Aplicacion ejecutandose en el puerto 3000");
});