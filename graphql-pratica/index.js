import express from "express";
import winston from "winston";
import cors from "cors";
import accountsRouter from "./routes/account.routes.js";
import { promises as fs } from "fs";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import AccountsService from "./services/accounts.services.js"
import Schema from "./schema/index.js"

const { readFile, writeFile } = fs;
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`
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

/*const schema = buildSchema(`
    type Account {
        id: Int
        name: String
        balance: Float
    }
    input AccountInput{
        id: Int
        name: String
        balance: Float
    }
    type Query {
        getAccounts: [Account]
        getAccount(id: Int): Account
    }
    type Mutation{
        createAccount(account: AccountInput): Account
        deleteAccount(Id: Int): Boolean
        updateAccount(account: AccountInput): Account
    }
`);

const root = {
    getAccounts: ()=> AccountsService.getAccounts(),
    getAccount(args){
        return AccountsService.getAccount(args.id);
    },
    createAccount({account}){
        return AccountsService.createAccount(account);
    },
    deleteAccount(args){
        AccountsService.deleteAccount(args.id);
    },
    updateAccount({account}){
        return AccountsService.updateAccount(account);
    }

}
*/


const app = express();
app.use(express.json());
app.use(cors());
app.use("/account", accountsRouter);
app.use(express.static("public"));

app.use("/graphql", graphqlHTTP({
    schema: Schema,
    //rootValue: root,
    graphiql: true
}));




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