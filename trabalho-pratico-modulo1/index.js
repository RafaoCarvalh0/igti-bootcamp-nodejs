import express from "express";
import carsRouter from "./routes/cars.js";
import { promises as fs } from "fs";
import cors from "cors";

const app = express();
const { readFile, writeFile } = fs;
app.use("/marcas", carsRouter);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));

global.fileName = "car-list.json"

app.listen(8080, async ()=> {
    try{
        await readFile (fileName);
        console.log("server online");
    }catch(err){
        console.log(err);
    }
    
});