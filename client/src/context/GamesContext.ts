import { createContext } from "react";
import { Game } from "../interface/Games";

export interface IGamesContext {
    gamesList: Game[] | null,
    getGamesList?: () => void
}

export const gamesDefaultState = {
    gamesList: []
};

export const GamesContext = createContext<IGamesContext>(gamesDefaultState);