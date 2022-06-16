import express from "express";

import postsRouter from "./postsRouter";
import authRouter from "./authRouter";

const router: express.Router = express.Router();

router.use("/posts", postsRouter);
router.use("/login", authRouter);

export default router;