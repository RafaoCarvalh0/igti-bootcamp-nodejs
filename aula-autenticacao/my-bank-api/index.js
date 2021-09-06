import express from "express";
import winston from "winston";
import cors from "cors";
import accountsRouter from "./routes/account.routes.js";
import { promises as fs } from "fs";
import basicAuth from "express-basic-auth";

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

function getRole(userName){
    if (userName == "admin"){
        return "admin"
    }else if(userName == "angelo"){
        return "role1"
    }
}

function authorize(...allowed) {

    const isAllowed = role => allowed.indexOf(role) > -1;

    return (req, res, next) => {

        if (req.auth.user) {
            const role = getRole(req.auth.user);

            if(isAllowed(role)){
                next()
            }else{
                res.status(401).send("Role not allowed");
            }
        }else{
            res.status(403).send("User not found");
        }

    }
}

const app = express();
app.use(express.json());
app.use(cors());

app.use(basicAuth({
    authorizer: (username, password) => {
        const userMatches = basicAuth.safeCompare(username, "admin")
        const pwdMatches = basicAuth.safeCompare(password, "admin")

        const user2Matches = basicAuth.safeCompare(username, "angelo")
        const pwd2Matches = basicAuth.safeCompare(password, "1234")


        return userMatches && pwdMatches || user2Matches && pwd2Matches;
    }
}));



app.use("/account", authorize("admin", "role1"), accountsRouter);
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