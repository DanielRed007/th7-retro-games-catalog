import { Router } from "express";
import { getGames, addGame, getGameById, updateGameById, deleteGameById } from "../controllers/games.controller";

const gamesRouter = Router();

gamesRouter.get("/", getGames);
gamesRouter.get("/:id", getGameById);
gamesRouter.post("/", addGame);
gamesRouter.put("/:id", updateGameById);
gamesRouter.delete("/:id", deleteGameById);

export { gamesRouter };
