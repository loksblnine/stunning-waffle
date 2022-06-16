import express from "express";

import postsRouter from "./postsRouter";

const router: express.Router = express.Router();

router.use("/post", postsRouter);

export default router;