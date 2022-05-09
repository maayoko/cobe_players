import React from "react";
import { Routes, Route } from "react-router-dom";

import DendiRoute from "@/components/DendiRoute";
import HomePage from "@/pages/Home";
import NewPlayerPage from "@/pages/New";
import PlayerDetailsPage from "@/pages/PlayerDetails";
import PlayerErrorPage from "@/pages/PlayerErrorPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/player/new" element={<NewPlayerPage />} />
            <Route path="/player/error" element={<PlayerErrorPage />} />
            <Route path="/player/:nickname" element={
                <DendiRoute>
                    <PlayerDetailsPage />
                </DendiRoute>
            } />
        </Routes>
    );
};

export default App;