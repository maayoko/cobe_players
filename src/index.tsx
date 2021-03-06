import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import Header from "./components/Header";
import HomePage from "./pages/Home";
import NewPlayerPage from "./pages/New";

const App = () => (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/player/new" element={<NewPlayerPage />} />
        </Routes>
    </>
);

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}