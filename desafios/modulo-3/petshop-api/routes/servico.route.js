import express from "express";
import ServicoController from "../controllers/servico.controller.js"

const router = express.Router();
router.use(express.json());

router.post("/", ServicoController.createServico);
router.get("/", ServicoController.getServicos);
router.get("/:servico_id", ServicoController.getServico);


export default router;