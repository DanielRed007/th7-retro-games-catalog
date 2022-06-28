import { Schema, model } from "mongoose";

export interface IGame {
  name: string;
  year: number;
  producedBy: string;
  genre: string;
  version: string;
  system: string;
  description: string;
}

const gameSchema = new Schema<IGame>({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  producedBy: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  version: {
    type: String,
  },
  system: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default model<IGame>("Game", gameSchema);
