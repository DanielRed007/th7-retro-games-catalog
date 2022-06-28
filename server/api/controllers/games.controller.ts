import { Request, Response } from "express";
import Game, { IGame } from "../models/games.model";

// GET --- get games list
export const getGames = async (req: Request, res: Response) => {

  const games = await Game.find();

  res.status(200).json(games);
};

// GET --- get game by id
export const getGameById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const game = await Game.findById(id);

  try {
    if(game){
      res.status(200).json(game);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

// POST --- add new game
export const addGame = async (req: Request, res: Response) => {
  const { name, year, producedBy, genre, version, system, description } = req.body;

  const gameExists = await Game.findOne({ name });

  if(gameExists){
    res.status(400).json({error: "User Already Exists"});
    throw new Error("User Already Exists");
  }

  const game = await Game.create({ name, year, producedBy, genre, version, system, description });

  if(game){
    res.status(201).json(game);
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
};

// PUT --- update game by id
export const updateGameById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const game = await Game.findById(id);
  game?.update({ $set: data }).exec();

  try {
    if(game){
      res.status(200).json(game);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

// PUT --- delete game by id
export const deleteGameById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Game.deleteOne({ id });
    res.status(200).json({success: "register deleted"});
  } catch (error) {
    res.status(404).json(error);
  }
};