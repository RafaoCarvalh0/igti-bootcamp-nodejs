import express from "express";
import winston from "winston";
import clientsRouter from "./routes/client.route.js"
import productRouter from "./routes/product.route.js"
import supplyRouter from "./routes/supply.route.js"
import saleRouter from "./routes/sale.route.js"
import cors from "cors"

//winston config
const { combine, timestamp, label, printf} = winston.format;
const myFormat = printf(( { level, message, label, timestamp })=> {
    return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "store-api.log"})
    ],
    format: combine(
        label({ label: "store-api" }),
        timestamp(),
        myFormat
    )
});
//winston config (end)

const app = express();
app.use(express.json());
app.use(cors());
app.use("/client", clientsRouter);
app.use("/product", productRouter);
app.use("/supply", supplyRouter);
app.use("/sale", saleRouter);
app.use((err, req, res, next)=>{
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
})

app.listen(8000, ()=> console.log("server online"));