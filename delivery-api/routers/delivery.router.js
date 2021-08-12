import express from "express";
import DeliveryController from "../controllers/delivery.controller.js"

const router = express.Router();
router.use(express.json());

router.post("/criarPedido", DeliveryController.criarPedido);
router.put("/atualizarPedido", DeliveryController.atualizarPedido);
router.patch("/atualizarStatus", DeliveryController.atualizarStatus);
router.get("/consultarPedido/:id", DeliveryController.consultarPedido);
router.delete("/excluirPedido", DeliveryController.excluirPedido);
router.get("/valorTotalCliente/:data", DeliveryController.consultaVTCP);
router.get("/valorTotalProduto/:data", DeliveryController.consultaVTCP);

router.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send({ error: err.message });
});

export default router;