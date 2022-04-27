import React, { PropsWithChildren, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    height: 6rem;
    background-color: ${props => props.theme.color};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`;

const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 2rem;
`;

const CreatePlayerNavLink = styled(NavLink)`
    color: #CFD8DC;
    text-decoration: none;
    font-size: 2rem;

    & > span:first-of-type {
        margin-left: 2rem;
    }

    & > span:last-of-type {
        margin-left: 2rem;
        color: white;
        font-size: 2.5rem;
    }
`;

const Input = styled.input`
    padding: 1rem;
    font-size: 1.3rem;
    width: 25rem;
`;

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
        <Header>
            <StyledNavLink to="/">Home</StyledNavLink>
            <div>
                <Input ref={inputElement} type="text" placeholder="Search player" onChange={handleSearchPlayer} />
                <CreatePlayerNavLink to="/player/new">
                    <span>Add player</span>
                    <span>&#43;</span>
                </CreatePlayerNavLink>
            </div>
        </Header>
    );
}

export const CreatePlayerHeader = () => {
    const navigate = useNavigate();

    return (
        <Header>
            <a href="#" onClick={() => navigate(-1)}>Back</a>
        </Header>
    );
}

export const PlayerDetailsHeader = () => {
    const navigate = useNavigate();

    return (
        <Header>
            <a href="#" onClick={() => navigate(-1)}>Back</a>
            <NavLink to="/player/new">
                <span>Add player</span>
                <span style={{ marginLeft: 10 }}>&#43;</span>
            </NavLink>
        </Header>
    ); 
}

export const PlayerErrorHeader = () => {
    return (
        <Header>
            <NavLink to="/">Home</NavLink>
        </Header>
    );
}