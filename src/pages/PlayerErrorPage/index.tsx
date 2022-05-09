import React from "react";

import { PlayerErrorHeader } from "@/components/Header";

const PlayerErrorPage = () => {
    return (
        <div>
            <PlayerErrorHeader />
            <div>
                <h2>ERROR:</h2>
                <p>Player details cannot be displayed!</p>
            </div>
        </div>
    );
}

export default PlayerErrorPage;