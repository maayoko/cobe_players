import { useEffect, useState } from "react";
import { Player } from "../../pages/New";

export const usePlayers = () => {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        fetch("/players.json")
            .then(response => response.json())
            .then(fetchedPlayers => setPlayers(fetchedPlayers));
    }, []);

    return players;
}