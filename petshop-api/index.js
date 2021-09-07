import express from "express";
import winston from "winston";
import proprietarioRouter from "./routes/proprietario.route.js"
import animalRouter from "./routes/animal.route.js"
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
        new (winston.transports.File)({ filename: "petshop-api.log"})
    ],
    format: combine(
        label({ label: "petshop-api" }),
        timestamp(),
        myFormat
    )
});
//winston config (end)

const app = express();
app.use(express.json());
app.use(cors());
app.use("/proprietario", proprietarioRouter);
app.use("/animal", animalRouter);

app.use((err, req, res, next)=>{
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
})

app.listen(8000, ()=> console.log("server online"));