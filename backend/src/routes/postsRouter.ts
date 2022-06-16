import express from "express";
import * as postsController from "../controllers/postsController";
import {authMiddleware} from "../middlewares/authMiddleware";

const customerRouter = express.Router();

customerRouter
  .route('/')
  .post(authMiddleware, postsController.createPost);

customerRouter
  .route('/offset/:page')
  .get(postsController.getPosts);

customerRouter
  .route('/:id')
  .get(postsController.getPostById)
  .put(authMiddleware, postsController.updatePostById)
  .delete(authMiddleware, postsController.deletePostById);

export default customerRouter;
