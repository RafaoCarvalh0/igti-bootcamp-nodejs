import express from "express";
import { promises as fs } from "fs";

const { readFile } = fs;

const router = express.Router();

router.get("/maisModelos", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName));

        let countData = 0;
        let moreBrands = 0;
        let mostDataLenght = 0;
        let brands = [];

        for (let i = 0; i < data.length; i++) {
            countData = data[i].models.length;
            if (i != 0) {
                mostDataLenght = data[moreBrands].models.length;
                if (countData > mostDataLenght) {
                    moreBrands = i;
                }
            } else {
                mostDataLenght = data[i].models.length;
                moreBrands = i;
            }
        }

        const maximum = data[moreBrands].models.length;

        for (let i = 0; i < data.length; i++) {
            countData = data[i].models.length;
            if (countData == maximum) {

                brands.push(data[i].brand);
            }
        }


        res.send({ "mostModels": brands });

    } catch (err) {
        next(err);
    }
})


router.get("/menosModelos", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName));

        let countData = 0;
        let leastBrands = 0;
        let mostDataLenght = 0;
        let brands = [];

        for (let i = 0; i < data.length; i++) {
            countData = data[i].models.length;
            if ((i != 0)) {
                if (countData < mostDataLenght) {
                    mostDataLenght = data[i].models.length;
                    leastBrands = i;
                }
            } else {
                mostDataLenght = data[i].models.length;
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

        for (let i = 0; i < brands.length; i++) {
            console.log(brands[i]);
        }

        res.send({ "leastModels": brands });

    } catch (err) {
        next(err);
    }
})

router.get("/listaMaisModelos/:x", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName));
        const maximum = req.params.x;

        let countData = 0;
        let brands = [];

        for (let i = 0; i < data.length; i++) {
            countData = data[i].models.length;
            if (countData >= maximum) {
                brands.push({
                    "modelQuantity": countData,
                    "brandName": data[i].brand
                });
            }
        }

        brands = brands.sort(sortOrder("brandName"));
        brands = brands.sort(sortOrder("modelQuantity"));

        let brandAux = [];
        for (let i = 0; i < brands.length; i++) {
            brandAux.push(`${brands[i].brandName} - ${brands[i].modelQuantity}`)
        }

        brandAux.reverse();

        res.send({ "modelsQuantity": brandAux });

    } catch (err) {
        next(err);
    }
});


router.get("/listaMenosModelos/:x", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(fileName));
        const minimum = req.params.x;
        
        let countData = 0;
        let brands = [];


        for (let i = 0; i < data.length; i++) {
            countData = data[i].models.length;
            if (countData <= minimum) {
                brands.push({
                    "modelQuantity": countData,
                    "brandName": data[i].brand
                });
            }
        }

       brands = brands.sort(sortOrder("brandName"));
       brands = brands.sort(sortOrder("modelQuantity"));

        let brandAux = [];
        for (let i = 0; i < brands.length; i++) {
            brandAux.push(`${brands[i].brandName} - ${brands[i].modelQuantity}`)
        }


        res.send({ "modelsQuantity": brandAux });


    } catch (err) {
        next(err);
    }
});


router.post("/listaModelos", async (req, res, next) => {
    try {
        let brandName = toLowerCase(req.body);

        const data = JSON.parse(await readFile(fileName));
        


    } catch (err) {
        next(err);
    }
});


function sortOrder(data) {
    return function (a, b) {
        if (a[data] > b[data]) {
            return 1;
        } else if (a[data] < b[data]) {
            return -1;
        }
        return 0;
    }
}


router.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send({ error: err.message });
});

export default router;