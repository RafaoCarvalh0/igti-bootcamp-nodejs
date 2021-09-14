import mongoose from "mongoose";

const Comentario = new mongoose.Schema(
    {
        nome: String,
        conteudo: String
    }, { collection: "posts" }
);

export default Comentario;