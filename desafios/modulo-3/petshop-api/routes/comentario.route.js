import express from "express";
import ComentarioController from "../controllers/comentario.controller.js";

const router = express.Router();
router.use(express.json());

router.post("/", ComentarioController.createComentario);



export default router;