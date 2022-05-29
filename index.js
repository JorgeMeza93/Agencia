import express from 'express';
import router from "./routes/index.js"

const app = express();
const port = process.env.PORT || 4000;
//Habilitar Pug
app.set("view engine", "pug");
app.use("/", router);

app.listen(port, () =>
  console.log(`El servidor está funcionando en el puerto ${port}`),
);