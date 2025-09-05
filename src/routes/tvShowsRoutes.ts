import express from "express";
import { createTvShow, getAllTvShows } from "../controllers/tvShowControllers";
import authMiddleware from "../middlewares/authMiddleware";

const tvShowRouter = express.Router();

tvShowRouter.post("/", authMiddleware, createTvShow);

tvShowRouter.get("/", authMiddleware, getAllTvShows);

export default tvShowRouter;
