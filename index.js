import express from 'express';
import router from "./routes/index.js"

const app = express();
const port = process.env.PORT || 4000;
//Habilitar Pug
app.set("view engine", "pug");
// Definir la carpeta pública
app.use(express.static("public"));
app.use("/", router);

app.listen(port, () =>
  console.log(`El servidor está funcionando en el puerto ${port}`),
);