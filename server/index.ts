import express, { Express } from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/dbConnection";
// routes
import { gamesRouter } from "./api/routes/games.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

dbConnection();

app.use(express.json());

app.use("/api/games", gamesRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
