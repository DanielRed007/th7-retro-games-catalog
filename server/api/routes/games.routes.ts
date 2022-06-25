import { Router } from "express";
import { getGames } from "../controllers/games.controller";

const gamesRouter = Router();

gamesRouter.get("/", getGames);

export { gamesRouter };
