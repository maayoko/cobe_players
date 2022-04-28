import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, {  } from "styled-components";
import { darken } from "polished";

import { HomeHeader } from "../../components/Header";
import { usePlayers } from "../../modules/player/usePlayers";
import { Player } from "../New";

const Button = styled.button`
    border: none;
    background-color: ${({theme}) => theme.color};
    border-radius: 4px;
    padding: 1rem 2rem;
    color: white;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => darken(0.2, theme.color)};
    }
`;

const ButtonContainer = styled.div`
    text-align: center;
    padding: 2rem 0;
`;

const ButtonsContainer = styled(ButtonContainer)`
    & > ${Button}:first-of-type {
        margin-right: 2rem;
    }
`;

const PlayersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4rem;
`;

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
    const displayLoadMoreButton: boolean = indexPlayers < players.length;
    
    if (sortPlayers) {
        playersToDisplay = [...playersToDisplay].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    }

    if (searchPlayerTerm.length > 0) {
        playersToDisplay = playersToDisplay.filter(player => player.name.toLowerCase().match(searchPlayerTerm.toLowerCase()));
    }

    return (
        <div>
            <HomeHeader updatePlayerTerm={updatePlayerTerm}/>
            <ButtonsContainer>
                <Button onClick={handleSortPlayers}>Sort players alphabetically</Button>
                <Button onClick={handleResetPlayers}>Reset players</Button>
            </ButtonsContainer>
            <PlayersContainer>
                {playersToDisplay.map((player, idx) => (
                    <NavLink to={`/player/${player.nickname}`} key={idx} style={{ flexBasis: "33.33333%", width: "33.333333%" }}>
                        <div>
                            <img src={player.photoURL} alt="Player Photo" />
                            <div>
                                <div></div>
                                <div>
                                    <p>{player.name}</p>
                                    <p>Country: {player.country}</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </PlayersContainer>
            {
                displayLoadMoreButton &&
                <ButtonContainer>
                    <Button onClick={handleLoadMorePlayers}>Load more</Button>
                </ButtonContainer>
            }
        </div>
    );
}

export default HomePage;