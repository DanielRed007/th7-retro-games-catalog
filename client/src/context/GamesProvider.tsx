import { useState } from "react";
import { GamesContext, gamesDefaultState } from "./GamesContext";
import { Game } from "../interface/Games";
import { getApi } from "../util/api/axiosUtil";

interface GamesProviderProps {
    children: any
}

export const GamesProvider = (gamesProviderProps: GamesProviderProps) => {

    const [ gamesList, setGamesList ] = useState<Game[]>(gamesDefaultState.gamesList);

    // const apiGamesList = (): Game[] => {
    //     let games: Game[] = []; 
        
    //     getApi("http://localhost:4112/api/games").then(res => {
    //         games = res.data;
    //     });

    //     return games;
    // };

    const getGamesList = async () => {
        let games = await getApi("http://localhost:4112/api/games");

        return games.data;
    }

    return (
        <GamesContext.Provider value={{
            gamesList,
            getGamesList
        }}>
            {gamesProviderProps.children}
        </GamesContext.Provider>
    );
}