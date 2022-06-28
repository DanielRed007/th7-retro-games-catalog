import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect("mongodb://localhost:27017/th7-games").then((connection) => {
    console.log(`⚡️[mongodb]: Connection Successful`);
  });
};
