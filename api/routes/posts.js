import express from "express";
import { addPost, deletePost } from "../controllers/post.js";
const router = express.Router();

router.get("/addpost", addPost);
router.get("/deletepost", deletePost);

export default router;
