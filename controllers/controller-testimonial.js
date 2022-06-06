import {testimonial} from "../models/Testimoniales.js"

const guardarTestimonial = async (req, res) => {
    //Validación del formulario
    const { nombre, correo, mensaje } = req.body;
    const error = []
    if(nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === ""){
        error.push( { mensaje: "Todos los campos son obligatorios"} )
    }
    if(error.length > 0){
        //Consultar Testimoniales Existentes
        const testimoniales = await testimonial.findAll();

        res.render("layout/testimoniales", {
            pagina: "Testimoniales",
            error: error,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }
    else{
        try {
            await testimonial.create( {nombre, correo, mensaje} );
            res.redirect("/testimoniales")
        } catch (error) {
            console.log(error);
        }
    }
}

export { guardarTestimonial }