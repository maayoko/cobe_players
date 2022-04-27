import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HomeHeader } from "../../components/Header";
import { usePlayers } from "../../modules/player/usePlayers";
import { Player } from "../New";

const HomePage = () => {
    const [indexPlayers, setIndexPlayer] = useState(10);
    const [sortPlayers, updateSortPlayers] = useState(false);
    const players: Player[] = usePlayers();
    const [ searchPlayerTerm, updatePlayerTerm ] = useState("");
    
    const handleLoadMorePlayers = () => { setIndexPlayer(indexPlayers + 6); }
    const handleSortPlayers = () => { updateSortPlayers(true); }
    const handleResetPlayers = () => { updateSortPlayers(false); }

    const initialPlayersToDisplay: Player[] = players.slice(0, indexPlayers);
    let playersToDisplay: Player[] = [...initialPlayersToDisplay];
    
    if (sortPlayers) {
        playersToDisplay = [...playersToDisplay].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    }

    if (searchPlayerTerm.length > 0) {
        playersToDisplay = playersToDisplay.filter(player => player.name.toLowerCase().match(searchPlayerTerm.toLowerCase()));
    }

    return (
        <div>
            <HomeHeader updatePlayerTerm={updatePlayerTerm}/>
            <div>
                <button onClick={handleSortPlayers}>Sort players alphabetically</button>
                <button onClick={handleResetPlayers}>Reset players</button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {playersToDisplay.map((player, idx) => (
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