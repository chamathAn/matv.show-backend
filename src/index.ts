import express, { Application, Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./utils/auth";
import cors from "cors";
import tvShowRouter from "./routes/tvShowsRoutes";
import movieRouter from "./routes/moviesRoutes";
import animeRouter from "./routes/animeRoutes";
const app: Application = express();
const port = 3000;
app.use(
  cors({
    origin: "https://matv-show-web-c6wb.vercel.app",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json());

// tv shows routes
app.use("/api/v1/tv-shows", tvShowRouter);

// movie routes
app.use("/api/v1/movies", movieRouter);

// anime routes
app.use("/api/v1/animes", animeRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hlo my World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
