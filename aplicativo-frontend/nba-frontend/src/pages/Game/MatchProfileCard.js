import './MatchProfileCard.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const GamePageMatch = ({game, imgRoot, to}) => {
    const imgTeamHome = imgRoot + game.teamHome.toLowerCase().replaceAll(" ","_") + ".png"
    const imgTeamAway = imgRoot + game.teamAway.toLowerCase().replaceAll(" ","_") + ".png"

    return (
        <div className="match-container">
                <div className="page-match-info">
                    <p>SEASON {game.season}</p>
                    <p>{game.date}</p>
                </div>
                <div className="page-match-points">
                    <div className="page-team">
                        <div className="team-symbol">
                            <img src={imgTeamHome} alt="" />
                            <p>{game.teamHome}</p>
                        </div>
                        
                    </div>

                    <div className="page-points">
                        <p className='points-both'>{game.pointsHome} - {game.pointsAway}</p>
                        <p className='status'>{game.status}</p>
                    </div>

                    <div className="page-team">
                        <div className="team-symbol">
                            <img src={imgTeamAway} alt="" />
                            <p>{game.teamAway}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default GamePageMatch