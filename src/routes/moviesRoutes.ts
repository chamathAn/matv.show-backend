import express from "express";
import authMiddleware from "../middlewares/authMiddleware";
import { createMovie, getAllMovies } from "../controllers/movieControllers";

const movieRouter = express.Router();

movieRouter.post("/", authMiddleware, createMovie);

movieRouter.get("/", authMiddleware, getAllMovies);

export default movieRouter;
