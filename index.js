  const express = require("express");

  const app = express(); 
  const port = process.env.PORT || 4000; 
  
  app.listen( port, () => {   // <--Arrancamos el servidor 
      console.log(`El Servidor está funcionando en el puerto ${port}`);
  }); 