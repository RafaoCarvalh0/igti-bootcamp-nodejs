import express from "express";
import PostController from "../controllers/posts.controller.js"

const router = express.Router();
router.use(express.json());

router.post("/", PostController.createPost);
router.get("/", PostController.getPosts);


export default router;