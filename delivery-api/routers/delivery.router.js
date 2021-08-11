import express from "express";
import DeliveryController from "../controllers/delivery.controller.js"

const router = express.Router();
router.use(express.json());

router.post("/criarPedido", DeliveryController.criarPedido);

export default router;