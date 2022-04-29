import { renderHook } from "@testing-library/react-hooks";

import { Player } from "../../pages/New";
import { usePlayers } from "./usePlayers";

const fetch = global.fetch = jest.fn();

describe("test `usePlayers`", () => {
    it("should return 5 players", async () => {
        const players: Player[] = [
            {
                "name": "Dendi",
                "country": "Germany",
                "photoURL": "https://resources.premierleague.com/photos/2020/08/15/11f41825-bb83-43e6-a6d3-d10f556ec92a/foden-new-shirt.jpg?width=200&height=300",
                "nickname": "dd",
                "earnings": 4958752
            },
            {
                "name": "Cristiano Ronaldo",
                "country": "Portugal",
                "photoURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/200px-Cristiano_Ronaldo_2018.jpg",
                "nickname": "CR7",
                "earnings": 120000000
            },
            {
                "name": "Cristiano Ronaldo",
                "country": "Portugal",
                "photoURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/200px-Cristiano_Ronaldo_2018.jpg",
                "nickname": "CR7",
                "earnings": 120000000
            },
            {
                "name": "Cristiano Ronaldo",
                "country": "Portugal",
                "photoURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/200px-Cristiano_Ronaldo_2018.jpg",
                "nickname": "CR7",
                "earnings": 120000000
            },
            {
                "name": "Cristiano Ronaldo",
                "country": "Portugal",
                "photoURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/200px-Cristiano_Ronaldo_2018.jpg",
                "nickname": "CR7",
                "earnings": 120000000
            }
        ];
        fetch.mockImplementationOnce(() => {
            return Promise.resolve({
                json: () => Promise.resolve(players),
            })
        });

        const { result, waitForNextUpdate } = renderHook(() => usePlayers());
        expect(result.current).toHaveLength(0);

        await waitForNextUpdate();

        expect(result.current).toHaveLength(5);
    });
});