import React from "react";
import { useParams } from "react-router-dom";
import { PlayerDetailsHeader } from "../../components/Header";
import { usePlayers } from "../../modules/player/usePlayers";
import { Player } from "../New";

type RouteParams = {
    nickname: string;
}

const PlayerDetailsPage = () => {
    const params = useParams<RouteParams>();
    const players: Player[] = usePlayers();
    const player: Player | undefined = players.find(p => p.nickname === params.nickname); 

    if (!player) {
        return (
            <div>
                <p>Player with nickname: {params.nickname} not found!</p>
            </div>
        );
    }

    return (
        <div>
            <PlayerDetailsHeader />
            <div>
                <p>{player.name}</p>
                <p>
                    <img src={player.photoURL} alt="Player Photo" />
                </p>
                <p>Country: {player.country}</p>
                <p>Nickname: {player.nickname}</p>
                <p>Earnings: {player.earnings} EUR</p>
            </div>
        </div>
    );
}

export default PlayerDetailsPage;