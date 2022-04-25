import React, { useEffect, useState } from "react";
import { Player } from "../New";

const HomePage = () => {

    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        fetch("/players.json")
            .then(response => response.json())
            .then(fetchedPlayers => setPlayers(fetchedPlayers));
    }, []);

    return (
        <div>
            List of players
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {players.map((player, idx) => (
                    <div key={idx} style={{ flexBasis: "33.33333%" }}>
                        <p>{player.name}</p>
                        <p>
                            <img src={player.photoURL} alt="Player Photo" />
                        </p>
                        <p>Country: {player.country}</p>
                        <p>Nickname: {player.nickname}</p>
                        <p>Earnings: {player.earnings} EUR</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;