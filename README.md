# Agencia
"Proyecto de una agencia de viajes utilizando HTML, SASS, JavaScript y ExpressJS"


Express y NodeJS	

Básicamente primero necesitamos instalar NodeJS y después precisamos usar el  gestor de paquetes y librerías npm para instalar la dependencia de

Un comentario breve existen dos tipos de dependencias. Las de producción y las de desarrollo. Las de desarrollo solo las necesitaremos mientras estas creando el proyecto y las de producción vas a requerirlas ya que el proyecto este publicado.

npm install express <— Con esto indicamos que utilizaremos la dependencia de forma de producción

Esto nos generara un node_modules y lock después necesitaremos instalar una dependencia de desarrollo llamada nodemon

npm install —save-dev nodemon

Esta dependencia básicamente detecta en cambios y reinicia el servidor 

Después creamos un archivo llamado index.js. 
En este archivo estarán las configuraciones de express.

En este archivo   
const express = require("express");  <— indica que del paquete instalado requeriremos express

const app = express();
  const port = process.env.PORT || 4000; 
  app.listen( () => {
      console.log(`El Servidor está funcionando en el puerto ${port}`);
  }); 

Arrancamos el servidor con la función listen  

¿Cómo ejecuto el index.js para arrancar el servidor?
Necesitaremos irnos al archivo package y en la sección de scripts.

 "scripts": {
    "dev": "nodemon index.js"
  },

Esto utiliza nodemon para que escuche los cambios y reinicie el servidor

Para ejecutar el script llamamos desde terminal al script
npm run dev
