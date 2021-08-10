import express from "express";
import winston from "winston";
import accountsRouter from "./routes/accounts.js";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

global.fileName = "accounts.json"

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "my-bank-api.log" })
    ],
    format: combine(
        label({ label: "my-bank-api" }),
        timestamp(),
        myFormat
    )

})

const app = express();
app.use(express.json());
app.use("/account", accountsRouter);
app.use(express.static("public"));

app.listen(8080, async () => {
    try {
        await readFile(fileName);
        logger.info("server online");
    } catch (err) {
        const initialJson = {
            nextId: 1,
            accounts: []
        }
        writeFile(fileName, JSON.stringify(initialJson)).then(() => {
            logger.info("server online, file created");
        }).catch(err => {
            logger.error(err);
        });
    }

});