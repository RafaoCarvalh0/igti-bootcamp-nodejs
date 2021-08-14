import express from "express";
//import deliveryRouter from "./routers/delivery.router.js"
import { promises as fs } from "fs";
import { graphqlHTTP } from "express-graphql";
import Schema from "./schemas/index.js"

const { readFile } = fs;

global.fileName = "pedidos.json"

const app = express();
app.use(express.json());

app.use("/graphql", graphqlHTTP({
    schema: Schema,
    graphiql: true
}))

app.listen(8080, async ()=>{
    try{
        await readFile(fileName);
        console.log("server online");
    }catch(err){
        console.log(err);
    }
})