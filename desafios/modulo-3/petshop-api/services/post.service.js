import PostRepository from "../repositories/post.repository.js";

async function createPost(post){
    return await PostRepository.insertPost(post);
}

async function getPosts(){
    return await PostRepository.getPosts();
}

export default {
    createPost,
    getPosts
}