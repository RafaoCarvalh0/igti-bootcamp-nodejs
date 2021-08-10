import express from "express";
import { promises as fs } from "fs";

const { readFile } = fs;

const router = express.Router();

router.get("/mostModels", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName));
        //console.log(data.length);
        //console.log(data[0].models.length);

        let countData = 0;
        let moreBrands = 0;
        let lastDataLenght = 0;
        let brands = [];
        
        for (let i = 0; i < data.length; i++) {
            countData = data[i].models.length;
            if (i != 0) {
                lastDataLenght = data[i - 1].models.length;
                if (countData > lastDataLenght) {
                    moreBrands = i;
                }
            } else {
                lastDataLenght = data[i].models.length;
            }
        }
        
        const maximum = data[moreBrands].models.length;

        for (let i = 0; i < data.length; i++) {
            countData = data[i].models.length;
            if (countData == maximum) {
                
                brands.push(data[i].brand);
            }
        }
        
        for( let i = 0 ; i < brands.length ; i++){
            console.log(brands[i]);
        }
        
        res.send({"mostModels": brands});

    } catch (err) {
        next(err);
    }
})


router.get("/leastModels", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName));

        let countData = 0;
        let leastBrands = 0;
        let lastDataLenght = 0;
        let brands = [];
        
        for (let i = 0; i < data.length; i++) {
            countData = data[i].models.length;
            if ((i != 0)) {
                if (countData < lastDataLenght) {
                    lastDataLenght = data[i].models.length;
                    leastBrands = i;
                }                  
            } else {
                lastDataLenght = data[i].models.length;
                leastBrands = i;
            }
        }
        
        const minimum = data[leastBrands].models.length;
        console.log(minimum);

        for (let i = 0; i < data.length; i++) {
            countData = data[i].models.length;
            if (countData == minimum) {
                brands.push(data[i].brand);
            }
        }
        
        for( let i = 0 ; i < brands.length ; i++){
            console.log(brands[i]);
        }
        
        res.send({"leastModels": brands});

    } catch (err) {
        next(err);
    }
})

router.get("/mostModels/:id", async (req, res, next) => {
    try{


    }catch(err){
        next(err);
    }
});

router.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send({ error: err.message });
});

export default router;