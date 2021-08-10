import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    console.log("GET no carros");
    res.send("GET no carros");
});

export default router;