import React from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import GameList from './GamePageList.js'

const Game = () => {

    const games = [
        {
            "id": 11900044,
            "date": "2019-10-12",
            "status": "Final",
            "season": 2019,
            "pointsHome": 91,
            "pointsAway": 77,
            "teamHome": "Nets",
            "teamAway": "Lakers"
        },
        {
            "id": 11900075,
            "date": "2019-10-18",
            "status": "Final",
            "season": 2019,
            "pointsHome": 107,
            "pointsAway": 123,
            "teamHome": "Nets",
            "teamAway": "Raptors"
        },
        {
            "id": 11900103,
            "date": "2020-07-22",
            "status": "Final",
            "season": 2020,
            "pointsHome": 68,
            "pointsAway": 99,
            "teamHome": "Nets",
            "teamAway": "Pelicans"
        }
    ]

    const [seasonController, setSeasonController] = React.useState('Seasons');

    const handleSeasonChange = (event) => {
        setSeasonController(event.target.value);
    }

    const [teamController, setTeamController] = React.useState('Teams');

    const handleTeamChange = (event) => {
        setTeamController(event.target.value);
    }

    var seasons = new Set();
    var teams = new Set();

    games.map((game, i) => (
        seasons.add(game.season),
        teams.add(game.teamHome),
        teams.add(game.teamAway)
    ))

    return (
        <div>
            <PageTemplate
                backImgSrc={"/FirstSectionImage/GameBackground.png"}
                sectionTitle={"GAMES"}
                sectionSubtitle={"CHECK THE MATCHES"}
                longSection={false}>
                <div className="game-page">
                    <div className="dropdown-selections">
                        <select value = {seasonController} onChange = {handleSeasonChange}>
                            <option value = 'Seasons'>Seasons</option>
                            {seasons && Array.from(seasons).map((season, i) => (
                                <option value={season}>{season}</option>
                            ))}
                        </select>
                        <select value = {teamController} onChange = {handleTeamChange}>
                            <option value = 'Teams'>Teams</option>
                            {teams && Array.from(teams).map((team, i) => (
                                <option value={team}>{team}</option>
                            ))}
                        </select>
                    </div>
                    <GameList games={seasonController == 'Seasons' ? 
                        (teamController == 'Teams' ? games : games.filter((game) => game.teamAway == teamController || game.teamHome == teamController))
                         : (teamController == 'Teams' ? games : games.filter((game) => (game.teamAway == teamController || game.teamHome == teamController) && game.season == seasonController))
                         } imgRoot={"/TeamCard/"}></GameList>
                </div>  
            </PageTemplate>
        </div>
    )
}

export default Game