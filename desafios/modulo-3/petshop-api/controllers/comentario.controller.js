import ComentarioService from "../services/comentario.service.js";

//controller is responsible for all the validations

async function createComentario(req, res, next) {
    try {
        let comentario = req.body;
        if (!comentario._id || !comentario.nome || !comentario.conteudo) {
            throw new Error("All data needed");
        }
        res.send(await ComentarioService.createComentario(comentario));
        logger.info(`${req.method} /comentario - ${JSON.stringify(comentario)}`);

    } catch (err) {
        next(err);
    }

}


export default {
    createComentario
   
}