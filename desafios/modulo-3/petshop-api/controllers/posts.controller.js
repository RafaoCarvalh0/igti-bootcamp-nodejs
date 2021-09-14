import PostService from "../services/post.service.js";

//controller is responsible for all the validations

async function createPost(req, res, next) {
    try {
        let post = req.body;
        if (!post.titulo || !post.conteudo) {
            throw new Error("All data needed");
        }
        res.send(await PostService.createPost(post));
        logger.info(`${req.method} /post - ${JSON.stringify(post)}`);

    } catch (err) {
        next(err);
    }

}

async function getPosts(req, res, next){
    try{
        if(req.query.proprietario_id){
            res.send(await PostService.getPosts(req.query.proprietario_id));
        }else{
            res.send(await PostService.getPosts());
            logger.info(`${req.method} /posts`);
        }
        
    }catch(err){
       next(err); 
    }

}


export default {
    createPost,
    getPosts
   
}