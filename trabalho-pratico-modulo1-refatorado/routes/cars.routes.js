import express from "express";
import CarsController from "../controllers/cars.controller.js"

const router = express.Router();
router.use(express.json());

router.get("/maisModelos", CarsController.maisModelos);
router.get("/menosModelos", CarsController.menosModelos);
router.get("/listaMaisModelos/:x",CarsController.listaMaisModelos);
router.get("/listaMenosModelos/:x", CarsController.listaMenosModelos);
router.post("/listaModelos", CarsController.listaModelos);

router.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send({ error: err.message });
});

export default router;