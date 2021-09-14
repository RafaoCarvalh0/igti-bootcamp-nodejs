import ComentarioRepository from "../repositories/comentario.repository.js";

async function createComentario(comentario){
    return await ComentarioRepository.insertComentario(comentario);
}

export default {
    createComentario
}