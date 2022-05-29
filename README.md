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

Dependiendo
Del tipo de respuesta especificaremos la respuesta
 
 app.get("/", (req, res) =>{
    res.send("Hola Mundo");
  });

Si devolvemos un JSON
  app.get("/", (req, res) =>{
    res.json({
      id: "2",
      nombre: "Jorge",
      edad: 29,
      peso: "62kg"
      
    })
  });

Y el m{as común si queremos devolver una lista
 app.get("/", (req, res) =>{
    res.render()

  });

SINTAXIS DE MODULOS
Si queremos usar la sintaxis del modulos en el package.json agregamos
 "type": "module"

Podemos crear un router que diseccionara las url para eso creamos una carpeta llamada routes y en ella un archivo llamado index.js Este archivo contendrá las rutas.
import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Inicio");
});
router.get("/nosotros", (req, res)=> {
    res.send("Nosotros");
});
router.get("/contacto", (req, res)=> {
    res.send("Contacto");
});

export default router;

Template engines
Son la V del MVC o  la vista.
Permiten mostrar la parte visual  (html) en una aplicacion express, debido  a que el modelo retorna un objeto (o arreglo) de datos, un template engine  permitirá acceder  a los resultados de una consulta y mostrarlos en pantalla.

Un template engine se instala vía npm
Así que procedemos con npm install pug y después en el archivo index.js
Habilitamos pug
app.set("view engine", "pug");

Instalado pug ahora procedemos a crear una carpeta llamada views y en views creamos un archivo con la extensión pug nosotros.pug.
En este archivo colocamos lo que queremos mostrar en html
h1 hola
p Desde pug.     <— Así es la sintaxis de pug
p Te amo Jaqueline

Pero para trabajar seriamente necesitaremos más que esto así que creamos una carpeta llamada layout y creamos un index.pug
Después presionando ! Nos genera el DOCTYPE en pug


