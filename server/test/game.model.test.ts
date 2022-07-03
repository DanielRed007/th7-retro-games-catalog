import { connectDBForTesting, disconnectDBForTesting } from "./connectDBForTesting";
import Game,{ IGame } from "../api/models/games.model";

// In order to run this test successfully, the data seed must be loaded
describe("Game Model Testing", () => {
    beforeAll( async () => {
        await connectDBForTesting();
    });

    afterAll( async () => {
        // await Game.collection.drop();
        await disconnectDBForTesting();
    });

    test("Find a single game by Id", async () => {
        const game = await Game.findById("62c19b76cbc66f57c4c4720a");

        expect(game?.name).toBe("Super Metroid");
        expect(game?.year).toBe(1992);
        expect(game?.producedBy).toBe("Nintendo");
    });

    test("Find a single game in a sorted list", async () => {
        const games = await Game.find().sort({"name": -1});

        expect(games[73]?.name).toBe("Contra 3: The Alien Wars");
        expect(games[73]?.year).toBe(1992);
    });
});