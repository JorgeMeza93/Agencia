import express from "express";
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimonoiales, paginaContacto, paginaDetalleViaje } from "../controllers/controller-page.js";
import { guardarTestimonial } from "../controllers/controller-testimonial.js";

const router = express.Router();

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetalleViaje)
router.get("/testimoniales", paginaTestimonoiales);
router.post("/testimoniales", guardarTestimonial);
router.get("/contacto", paginaContacto)

export default router;