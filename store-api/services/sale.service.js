import SaleRepository from "../repositories/sale.respository.js";
import ClientRepository from "../repositories/client.repository.js";
import ProductRepository from "../repositories/product.repository.js";

async function createSale(sale) {
    let error = "";
    if (!await ClientRepository.getClient(sale.client_id)) {
        error = "Client not found";
    }
    const product = await ProductRepository.getProduct(sale.product_id);
    if (!product) {
        error += "Product not found";
    }
    if (error) {
        throw new Error(error);
    }

    if (product.stock > 0) {
        sale = await SaleRepository.insertSale(sale);
        product.stock--;
        await ProductRepository.updateProduct(product);
        return sale;
    } else {
        throw new Error("Product out of stock");
    }

}

async function getSales() {
    return await SaleRepository.getSales();
}

async function getSale(id) {
    return await SaleRepository.getSale(id);
}

async function deleteSale(id) {
    const sale = await SaleRepository.getSale(id)
    if (sale) {
        const product = await ProductRepository.getProduct(sale.product_id);
        await SaleRepository.deleteSale(id);
        product.stock++;
        await ProductRepository.updateProduct(product);
    } else {
        throw new Error("Sale not found");
    }

    const product = await ProductRepository.getProduct(id);

    if (product.stock > 0) {
        sale = await SaleRepository.insertSale(sale);
        product.stock--;
        await ProductRepository.updateProduct(product);
        return sale;
    } else {
        throw new Error("Product out of stock");
    }

    return
}

async function updateSale(sale) {
    let error = "";
    if (!await ClientRepository.getClient(sale.client_id)) {
        error = "Client not found";
    }
    const product = await ProductRepository.getProduct(sale.product_id);
    if (!product) {
        error += "Product not found";
    }
    if (error) {
        throw new Error(error);
    }
    
    return await SaleRepository.updateSale(sale);
}

export default {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}