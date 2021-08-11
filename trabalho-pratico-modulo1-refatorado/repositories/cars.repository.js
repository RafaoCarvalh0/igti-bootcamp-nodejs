import { promises as fs } from "fs";
const { readFile } = fs;

async function todosDados() {
    const data = JSON.parse(await readFile(fileName));
    return data;
}

async function maisModelos(){
    const data = await todosDados();
    let countData = 0;
    let moreBrands = 0;
    let mostDataLenght = 0;
    let brands = [];

    setTim

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

    return brands;

}

async function menosModelos() {
    const data = await todosDados();
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

    for (let i = 0; i < data.length; i++) {
        countData = data[i].models.length;
        if (countData == minimum) {
            brands.push(data[i].brand);
        }
    }

    return(brands);

}

async function listaMaisModelos(x){
    const data = await todosDados();
    const maximum = x;
    console.log(maximum);

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

    brands = brands.sort(await sortOrder("brandName"));
    brands = brands.sort(await sortOrder("modelQuantity"));

    let brandAux = [];
    for (let i = 0; i < brands.length; i++) {
        brandAux.push(`${brands[i].brandName} - ${brands[i].modelQuantity}`)
    }

    brandAux.reverse();

    return brandAux;
}

async function listaMenosModelos(x) {
    const data = await todosDados();
    const minimum = x;
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

    brands = brands.sort(await sortOrder("brandName"));
    brands = brands.sort(await sortOrder("modelQuantity"));

    let brandAux = [];
    for (let i = 0; i < brands.length; i++) {
        brandAux.push(`${brands[i].brandName} - ${brands[i].modelQuantity}`)
    }

    return brandAux;
}

async function listaModelos(x){
    const data = await todosDados();
    const brands = data.find(
        m => m.brand.toUpperCase() == x.toUpperCase()
    )
    return brands.models;
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

export default{
    todosDados,
    maisModelos,
    menosModelos,
    listaMaisModelos,
    listaMenosModelos,
    listaModelos
}