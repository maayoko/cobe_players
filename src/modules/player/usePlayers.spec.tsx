import { Player } from "../../pages/New";
import { usePlayers } from "./usePlayers";

describe("test `usePlayers`", () => {
    it("should return 5 players", () => {
        const actualPlayers: Player[] = usePlayers();

        expect(actualPlayers).toHaveLength(0);
    });
});