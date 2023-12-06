import './SeasonProfile.scss'
import {React, useEffect} from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import { useFetch } from '../../hooks/useFetch'
import {useLocation} from 'react-router-dom'
import GameList from '../../components/GameList/GameList'
import PointStats from '../../components/Stats/PointStats'
import VictoryStats from '../../components/Stats/VictoryStats'



const url = "seasons"
const endpointGames = "/games"
const endpointStatsPoint = "/statistics/points"
const endpointStatsVictories = "/statistics/victories"


const SeasonProfile = () => {
    const location = useLocation()
    const { param } = location.state

    const {data: games, buildRequest: requestGames} = useFetch(url)
    const {data: points, buildRequest: requestPoints} = useFetch(url)
    const {data: victories, buildRequest: requestVictories} = useFetch(url)

    useEffect(() => {
        requestGames(param.year + endpointGames, "GET")
        requestPoints(param.year + endpointStatsPoint, "GET")
        requestVictories(param.year + endpointStatsVictories, "GET")
    }, [])



    return (
        <div>
            <PageTemplate
                backImgSrc={"/FirstSectionImage/SeasonBackground.png"}
                sectionTitle={"SEASON " + param.year}
                longSection={false}>
                    <div className="season-content">
                        <div className="stats">
                            <div className='stats-points-team'>
                                <PointStats data={points}/>
                            </div>
                            <div className='stats-win-home'>
                                <VictoryStats data={victories}/>
                            </div>
                        </div>
                        <div className="games-list">
                            <GameList games={games} imgRoot={"/TeamCard/"}></GameList>
                        </div>                    
                    </div>
            </PageTemplate>
        </div>
    )
}

export default SeasonProfile