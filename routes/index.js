import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.render("layout/index", {
        pagina: "Inicio"
    });
});
router.get("/nosotros", (req, res)=>{
    res.render("layout/nosotros", {
        pagina: "Nosotros"
    });
});
router.get("/contacto", (req, res)=>{
    res.render("layout/contacto", {
        pagina: "Contacto"
    });
});
router.get("/viajes", (req, res)=> {
    res.render("layout/viajes", {
        pagina: "Viajes"
    });
});
router.get("/testimoniales", (req, res)=>{
    res.render("layout/testimoniales", {
        pagina: "Testimoniales"
    });
});

export default router;