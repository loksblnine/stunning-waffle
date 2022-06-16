import express from "express";

import postsRouter from "./postsRouter";

const router: express.Router = express.Router();

router.use("/posts", postsRouter);

export default router;