import PostSchema from "../schemas/post.schema.js"
import PostRepository from "./post.repository.js";
import { connect } from "./mongo.db.js"

async function insertComentario(comentario) {
    try {
        const mongoose = await connect();
        const ProductInfo = mongoose.model("posts", PostSchema);
        const newComentario = await ProductInfo.findOne({ _id: comentario._id}).exec();
        delete comentario._id
        newComentario.comentarios.push(comentario);
        return await PostRepository.updatePost(newComentario);
    } catch (err) {
        throw err;
    }

}


export default {
    insertComentario
}