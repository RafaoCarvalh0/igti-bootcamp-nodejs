import { connect } from "mongoose";
import ProductInfoSchema from "../schemas/prductinfo.schema.js";



async function createProductInfo(productInfo) {
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        productInfo = new ProductInfo(productInfo);
        await productInfo.save();
    } catch (err) {
        throw err;
    }
}

async function updateProductInfo(productInfo) {
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        await ProductInfo.findOneAndUpdate({
            productId: productInfo.productId
        }, productInfo);
    } catch (err) {
        throw err;
    }
}

async function getProductInfo(productId) {
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        const query = ProductInfo.findOne({
            productId
        });
        return await query.exec();
    } catch (err) {
        throw err;
    }
}


async function getProducstInfo() {
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        const query = ProductInfo.find({});
        return await query.exec();
    } catch (err) {
        throw err;
    }
}

async function getProducstInfo(productId) {
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        await ProductInfo.deleteOne({ productId });
    } catch (err) {
        throw err;
    }
}

export default {
    createProductInfo,
    updateProductInfo,
    getProductInfo,
    getProducstInfo
}