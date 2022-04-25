import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
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

export default Header;