import PostSchema from "../schemas/post.schema.js"
import { connect } from "./mongo.db.js"

async function insertPost(post) {
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model("posts", PostSchema);
        post = new ProductInfo(post);
        return await post.save();
    } catch (err) {
        throw err;
    }

}

async function getPosts() {
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model("posts", PostSchema);
        const query = ProductInfo.find({});
        return await query.exec();
    } catch (err) {
        throw err;
    }
}

async function updatePost(post) {
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model("posts", PostSchema);
        const query = ProductInfo.findOneAndUpdate({ _id: post._id }, post);
        return await query.exec();
    } catch (err) {
        throw err;
    }
}


export default {
    insertPost,
    getPosts,
    updatePost
}