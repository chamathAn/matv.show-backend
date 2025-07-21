import express, { Application, Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./utils/auth";
const app: Application = express();
const port = 3000;

app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hlo my World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
