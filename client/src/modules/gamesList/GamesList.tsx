
import React, { useState, useEffect, useContext } from 'react';
import { GamesContext } from "../../context/GamesContext";
import { Game } from "../../interface/Games";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function GamesList(){

    const { getGamesList } = useContext(GamesContext);
    const [ games , setGamesList ] = useState<Game[]>([]);

    useEffect(() => {
        getGames();
        
    },[]);

    const getGames = async () => {
        const list = await getGamesList?.();

        setGamesList(list || []);
        return list;
    };

    return (
        <Box
            sx={{
            width: "100%",
            height: "79vh",
            backgroundColor: '#f7f7f7',
            }}
        >
            <Container maxWidth="md">
                <h1>Hello!</h1>
                { games.length > 0 ? 
                    <h1>{ games[0].name }</h1>
                : "Nope :((" }
            </Container>
        </Box>
    );
};
