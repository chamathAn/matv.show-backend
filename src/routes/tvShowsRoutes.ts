import express from "express";
import { createTvShow } from "../controllers/tvShowControllers";
import authMiddleware from "../middlewares/authMiddleware";

const tvShowRouter = express.Router();

tvShowRouter.post("/", authMiddleware, createTvShow);

export default tvShowRouter;
