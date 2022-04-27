import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const HomeHeader = () => {
    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <input type="text" placeholder="Search player" />
            <NavLink to="/player/new">
                <span>Create player</span>
                <span style={{ marginLeft: 10 }}>&#43;</span>
            </NavLink>
        </header>
    );
}

export const CreatePlayerHeader = () => {
    const navigate = useNavigate();

    return (
        <header>
            <a href="#" onClick={() => navigate(-1)}>Back</a>
        </header>
    );
}

export const PlayerDetailsHeader = () => {
    const navigate = useNavigate();

    return (
        <header>
            <a href="#" onClick={() => navigate(-1)}>Back</a>
            <NavLink to="/player/new">
                <span>Create player</span>
                <span style={{ marginLeft: 10 }}>&#43;</span>
            </NavLink>
        </header>
    ); 
}