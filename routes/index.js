import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.render("index");
});
router.get("/nosotros", (req, res)=> {
    const viajes = "Viajes a Brasil";
    res.render("nosotros", {
        textoViajes: viajes,
    });

});
router.get("/contacto", (req, res)=> {
    res.send("Contacto");
});

export default router;