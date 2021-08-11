import express from "express";
import AccountsController from "../controllers/accounts.controller.js";

const router = express.Router();

router.post("/", AccountsController.createAccount);
router.get("/", AccountsController.getAccounts);
router.get("/:id", AccountsController.getAccount);
router.delete("/:id", AccountsController.deleteAccount);
router.put("/", AccountsController.updateAccount);
router.patch("/updateBalance", AccountsController.updateBalance);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} ${err.message}`);
    console.log(err);
    res.status(400).send({ error: err.message });
});

export default router;