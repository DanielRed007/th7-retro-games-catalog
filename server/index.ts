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

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4112');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials',"true");

  next();
});

app.use("/api/games", gamesRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
