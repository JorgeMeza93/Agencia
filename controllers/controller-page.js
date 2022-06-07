import {viaje} from "../models/Viaje.js"
import { testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
    //Controlar 3 viajes del modelo Viaje
    const promiseDB = [];
    promiseDB.push( viaje.findAll( {limit: 3} ) );
    promiseDB.push( testimonial.findAll( {limit: 3} ) );
    try {
        const resultado = await Promise.all( promiseDB );
        res.render("layout/inicio", {
            pagina: "Inicio",
            clase: "home",
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error)
    }
}
const paginaNosotros = (req, res) => {
    res.render("layout/nosotros", {
        pagina: "Nosotros"
    });
}
const paginaViajes = async (req, res) => {
    //Consultar BD
    const viajes = await viaje.findAll()   // <-- Trae todos los resultados de la tabla
    console.log(viajes);

    res.render("layout/viajes", {
        pagina: "Viajes",
        viajes,   // <-- viajes: viajes --> Es igual al array del resultado de la consulta
    })
}
const paginaTestimonoiales = async (req, res) =>{
    try {
        const testimoniales = await testimonial.findAll();
        res.render("layout/testimoniales", {
            pagina: "Testimoniales",
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }
}

const paginaContacto = (req, res) => {
    res.render("layout/contacto", {
        pagina: "Contacto"
    })
}
//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) =>{
    const { slug } = req.params
    try {
        const resultado = await viaje.findOne({ where : { slug: slug } });
        res.render("layout/viaje", {
            pagina: "Información del viaje",
            resultado
        });
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonoiales,
    paginaContacto,
    paginaDetalleViaje
}