import './Header.scss'
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="header">
            <img src={require("./nba-logo-transparent.png")} alt="" />
            <Navbar />
        </div>
    )
}

export default Header