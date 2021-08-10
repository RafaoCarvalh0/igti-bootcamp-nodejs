import express from "express";
import winston from "winston";

const app = express();
app.use(express.json());

const { combine, printf, label, timestamp } = winston.format;

const myFormat = printf(({level, message, label, timestamp})=>{
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename : "my-log.log"})
    ],
    format: combine(
        label({ label : "my-app"}),
        timestamp(),
        myFormat
    )
});

logger.error("error log");
logger.warn("warn log");
logger.info("info log");
logger.verbose("verbose log"); 

app.listen(8080, ()=>{
    console.log("server online");
});