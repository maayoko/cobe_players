import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import NewPlayerPage from "./pages/New";
import PlayerDetailsPage from "./pages/PlayerDetails";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/player/new" element={<NewPlayerPage />} />
            <Route path="/player/:nickname" element={<PlayerDetailsPage />} />
        </Routes>
    );
};

export default App;