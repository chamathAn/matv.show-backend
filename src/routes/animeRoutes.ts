import express from "express";
import authMiddleware from "../middlewares/authMiddleware";
import { createAnime, getAllAnimes } from "../controllers/animeControllers";

const animeRouter = express.Router();

animeRouter.post("/", authMiddleware, createAnime);

animeRouter.get("/", authMiddleware, getAllAnimes);

export default animeRouter;
