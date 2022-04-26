import React from "react";
import { NavLink } from "react-router-dom";
import { usePlayers } from "../../modules/player/usePlayers";
import { Player } from "../New";

const HomePage = () => {
    const players: Player[] = usePlayers();
    const handleLoadMorePlayers = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e)
    }

    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {players.map((player, idx) => (
                    <NavLink to={`/player/${player.nickname}`} key={idx} style={{ flexBasis: "33.33333%" }}>
                        <p>
                            <img src={player.photoURL} alt="Player Photo" />
                        </p>
                        <p>{player.name}</p>
                        <p>Country: {player.country}</p>
                    </NavLink>
                ))}
            </div>
            <div style={{ textAlign: "center" }}>
                <button onClick={handleLoadMorePlayers}>Load more</button>
            </div>
        </div>
    );
}

export default HomePage;