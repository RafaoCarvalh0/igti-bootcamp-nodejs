import CarsRepository from "../repositories/cars.repository.js";
import { promises as fs } from "fs";
const { readFile } = fs;

async function maisModelos() {
    return await CarsRepository.maisModelos();
}

async function menosModelos() {
    return await CarsRepository.menosModelos();
}

async function listaMaisModelos(x) {
    return await CarsRepository.listaMaisModelos(x);
}

async function listaMenosModelos(x) {
    return await CarsRepository.listaMenosModelos(x);
}

async function listaModelos(x){
    return await CarsRepository.listaModelos(x);

    
}

async function sortOrder(data) {
    return function (a, b) {
        if (a[data] > b[data]) {
            return 1;
        } else if (a[data] < b[data]) {
            return -1;
        }
        return 0;
    }
}


export default {
    maisModelos,
    menosModelos,
    listaMaisModelos,
    listaMenosModelos,
    listaModelos
}