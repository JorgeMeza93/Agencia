import express from 'express';
import router from "./routes/index.js";
import db from "./config/db.js";

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

// Definir la carpeta pública
app.use(express.static("public"));
app.use("/", router);

app.listen(port, () =>
  console.log(`El servidor está funcionando en el puerto ${port}`),
);