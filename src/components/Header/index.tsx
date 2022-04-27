import React, { PropsWithChildren, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface HomeHeaderProps {
    updatePlayerTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const HomeHeader = ({ updatePlayerTerm }: PropsWithChildren<HomeHeaderProps>) => {
    const inputElement = useRef<HTMLInputElement>(null);
    const handleSearchPlayer = () => {
        const searchTerm: string = (inputElement.current as HTMLInputElement).value;
        updatePlayerTerm(searchTerm);
    }
    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <input ref={inputElement} type="text" placeholder="Search player" onChange={handleSearchPlayer} />
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