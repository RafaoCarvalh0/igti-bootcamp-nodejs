import express from "express";
import ProprietarioController from "../controllers/proprietario.controller.js"

const router = express.Router();
router.use(express.json());

router.post("/", ProprietarioController.createProprietario);
router.get("/", ProprietarioController.getProprietarios);
router.get("/:id", ProprietarioController.getProprietario);
router.delete("/:id", ProprietarioController.deleteProprietario);
router.put("/", ProprietarioController.updateProprietario);


export default router;