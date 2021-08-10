import express from "express";
import carsRouter from "./routes/cars.js";
import { promises as fs } from "fs";

const app = express();
const { readFile, writeFile } = fs;
app.use("/cars", carsRouter);
app.use(express.json());

global.fileName = "car-list.json"

app.listen(8080, async ()=> {
    try{
        await readFile (fileName);
        console.log("server online");
    }catch(err){
        console.log(err);
    }
    
});