import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import Cliente from "./src/routes/Client.js"
import Reserva from "./src/routes/Reserva.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

//Creo una constante que es igual a la libreria que acabo de importar, y la ejecuto

const app = express();

app.use(
    cors({
      origin: "http://localhost:5173", // Dominio del cliente
      credentials: true, // Permitir envío de cookies y credenciales
    })
  );

app.use(express.json());
app.use(cookieParser());

//Traemos el archivo json 
const swaggerDocument = JSON.parse(
    fs.readFileSync(
      path.resolve("./cruds.json"),
      "utf-8"
    )
  )

  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  app.use("/api/cliente", Cliente)
  app.use("/api/reserva", Reserva)

export default app;
