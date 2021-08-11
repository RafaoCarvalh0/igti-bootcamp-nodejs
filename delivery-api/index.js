import express from "express";
import deliveryRouter from "./routers/delivery.router.js"
import { promises as fs } from "fs";

const { readFile } = fs;

const app = express();
app.use(express.json());
app.use("/delivery", deliveryRouter);

global.fileName = "pedidos.json"

app.listen(8080, async ()=>{
    try{
        await fs.readFile(fileName);
        console.log("server online");
    }catch(err){
        console.log(err);
    }
})