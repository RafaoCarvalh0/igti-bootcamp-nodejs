import ProductRepository from "../repositories/product.repository.js";
import ProductinfoRepository from "../repositories/productinfo.repository.js";



async function createProduct(product){
    return await ProductRepository.insertProduct(product);
}

async function getProducts(){
    return await ProductRepository.getProducts();
}

async function getProduct(id){
    return await ProductRepository.getProduct(id);
}

async function deleteProduct(id){
    return await ProductRepository.deleteProduct(id);
}

async function updateProduct(product){
    return await ProductRepository.updateProduct(product);
}

async function saveProductInfo(productInfo){
    await ProductinfoRepository.createProductInfo(productInfo);
}

export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    saveProductInfo
}