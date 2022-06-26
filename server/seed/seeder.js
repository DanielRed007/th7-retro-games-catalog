const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Game = require("./seeder-model");

mongoose.connect("mongodb://localhost:27017/th7-games");

const games = JSON.parse(fs.readFileSync(`../data-seed/games.json`));

const importData = async () => {
  try {
    await Game.create(games);
    console.log("Data Imported...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

const deleteData = async () => {
  try {
    await Game.deleteMany();
    console.log("Data Destroyed...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
