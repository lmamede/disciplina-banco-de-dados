import './Navbar.scss';

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/teams">Teams</Link>
            <Link to="/seasons">Seasons</Link>
            <Link to="/arenas">Arenas</Link>
            <Link to="/games">Games</Link>
        </nav>
    )
}

export default Navbar;