import './Navbar.scss';

import React from 'react'
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <nav>
            <Navlink  to="/" text="Home" />
            <Navlink  to="/teams" text="Teams" />
            <Navlink  to="/seasons" text="Seasons" />
            <Navlink  to="/arenas" text="Arenas" />
            <Navlink  to="/games" text="Games" />
        </nav>
    )
}

export default Navbar;