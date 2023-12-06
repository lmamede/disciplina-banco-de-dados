import './GameMatch.scss'
import React from 'react'

const GameMatch = ({game, imgRoot}) => {
    const imgTeamHome = imgRoot + game.teamHome.toLowerCase() + ".png"
    const imgTeamAway = imgRoot + game.teamAway.toLowerCase() + ".png"

    return (
        <div className='match-container'>
            <div className="match-info">
                <p>SEASON {game.season}</p>
                <p>{game.date}</p>
            </div>
            <div className="match-points">
                <div className="team">
                    <div className="team-symbol">
                        <img src={imgTeamHome} alt="" />
                        <p>{game.teamHome}</p>
                    </div>
                    
                </div>

                <div className="points">
                    <p className='points-both'>{game.pointsHome} - {game.pointsAway}</p>
                    <p className='status'>{game.status}</p>
                </div>

                <div className="team">
                    <div className="team-symbol">
                        <img src={imgTeamAway} alt="" />
                        <p>{game.teamAway}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameMatch