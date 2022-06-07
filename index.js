import express from 'express';
import router from "./routes/index.js";
import db from "./config/db.js";
import dotenv from "dotenv";

dotenv.config({ path:"variables.env"})

const app = express();
//Conectar a base de datos
db.authenticate()
  .then( () => console.log("Base de datos conectada"))
  .catch( error => console.log(error))
const port = process.env.PORT || 4000;

//Habilitar Pug
app.set("view engine", "pug");

//Middleware (obtener el año actual)
app.use( (req, res, next) =>{
  res.locals.actualYear = new Date().getFullYear();
  console.log(res.locals)
  return next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded( {extended: true} ));

// Definir la carpeta pública
app.use(express.static("public"));

app.use("/", router);

/* Puerto y host para la app */
const host = process.env.HOST || "0.0.0.0"

app.listen(port, host,() =>
  console.log(`El servidor está funcionando en el puerto ${port}`),
);