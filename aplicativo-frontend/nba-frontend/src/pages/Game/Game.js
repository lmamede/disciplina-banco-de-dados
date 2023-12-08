import { React, useEffect, useState } from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import GamePageList from './GamePageList.js'
import { useFetch } from '../../hooks/useFetch'

const urlGames='games'
const urlSeasons='seasons'
const urlTeams='teams'

const Game = () => {
    const [seasonController, setSeasonController] = useState('');
    const [teamController, setTeamController] = useState('');

    const {data: games, buildRequest: requestGames} = useFetch(urlGames)
    const {data: seasons, buildRequest: requestSeasons} = useFetch(urlSeasons)
    const {data: teams, buildRequest: requestTeams} = useFetch(urlTeams)
    

    useEffect(() => {
        requestSeasons("", "GET")
        requestTeams("", "GET")
        requestGames({season : 2022, team_nickname: ""}, "POST")
    }, [])
    


    const handleSeasonChange = (event) => {
        setSeasonController(event.target.value);
    }

    const handleTeamChange = (event) => {
        setTeamController(event.target.value);
    }

    const handleChange = () => {
        requestGames({season : seasonController, team_nickname: teamController}, "POST")
    }


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
                            <option value = "">Seasons</option>
                            {seasons && seasons.map((season, i) => (
                                <option value={season.year} key={i}>{season.year}</option>
                            ))}
                        </select>
                        <select value = {teamController} onChange = {handleTeamChange}>
                            <option value = "">Teams</option>
                            {teams && teams.map((team, i) => (
                                <option value={team.nickname} key={i}>{team.nickname}</option>
                            ))}
                        </select>
                        <button onClick={handleChange}> Confirm</button>
                    </div>
                    <GamePageList games={games} imgRoot={"/TeamCard/"} to={"/games/profile"}></GamePageList>
                </div>  
            </PageTemplate>
        </div>
    )
}

export default Game