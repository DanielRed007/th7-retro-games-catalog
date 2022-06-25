import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
// routes
import { gamesRouter } from "./api/routes/games.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/api/games", gamesRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
