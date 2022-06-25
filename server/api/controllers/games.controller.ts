import { Request, Response } from "express";

export const getGames = (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
};
