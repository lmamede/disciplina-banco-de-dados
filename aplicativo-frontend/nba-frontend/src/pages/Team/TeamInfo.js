import './TeamInfo.scss'
import React from 'react'

const TeamInfo = ({teamProfile}) => {
    return (
        <div className='team-profile'>
             <h1>TEAM PROFILE</h1>
                <label >
                    Foundation
                    <p>{teamProfile && teamProfile.foundationYear}</p>
                </label>

                <label >
                    Games Played
                    <p>{teamProfile && teamProfile.totalGamesPlayed}</p>
                </label>

                <label >
                    Winning Games
                    <p>{teamProfile && teamProfile.totalWinningGames}</p>
                </label>

                <label >
                    Loosing Games
                    <p>{teamProfile && teamProfile.totalLoosingGames}</p>
                </label>
        </div>
    )
}

export default TeamInfo