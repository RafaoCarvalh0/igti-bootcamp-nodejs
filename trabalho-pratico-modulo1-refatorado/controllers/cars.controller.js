import CarsService from "../services/cars.service.js"

async function maisModelos(req, res, next) {
    try {
        res.send({ "mostModels": await CarsService.maisModelos() });
    } catch (err) {
        next(err);
    }
}

async function menosModelos(req, res, next) {
    try {
        res.send({ "leastModels": await CarsService.menosModelos() });
    } catch (err) {
        next(err);
    }
}

async function listaMaisModelos(req, res, next) {
    try {
        res.send({ "modelsQuantity": await CarsService.listaMaisModelos(req.params.x) });
    } catch (err) {
        next(err);
    }
}

async function listaMenosModelos(req, res, next) {
    try {
        res.send({ "modelsQuantity": await CarsService.listaMenosModelos(req.params.x) });
    } catch (err) {
        next(err);
    }
}

async function listaModelos(req, res, next) {
    try {
        let brandName = req.body.nomeMarca;
        let brands = await CarsService.listaModelos(brandName);
        if (brands == undefined) {
            res.send([]);
        } else {
            res.send(brands);
        }
    } catch (err) {
        next(err);
    }
}

export default {
    maisModelos,
    menosModelos,
    listaMaisModelos,
    listaMenosModelos,
    listaModelos
}