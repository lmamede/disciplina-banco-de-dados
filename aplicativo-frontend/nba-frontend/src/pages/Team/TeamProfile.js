import './TeamProfile.scss'
import React from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import TeamInfo from './TeamInfo'
import TeamHomeWinStats from '../../components/Stats/TeamHomeWinStats'
import TeamTotalWinStats from '../../components/Stats/TeamTotalWinStats'
import TeamGameList from './TeamGameList'
import AdversaryStats from '../../components/Stats/AdversaryStats'
import { useFetch } from '../../hooks/useFetch'
import {useLocation} from 'react-router-dom'

const url = "teams/profile"
const endpointStatsAd = "/statistics/adversaries"
const endpointGames = "/games"

const TeamProfile = () => {
    const location = useLocation()
    const { param } = location.state

    const {data: profile, buildRequest: requestProfile} = useFetch(url)
    const {data: adversaries, buildRequest: requestAdversaries} = useFetch(url)
    const {data: games, buildRequest: requestGames} = useFetch(url)

    requestProfile(param.nickname, "GET")
    requestAdversaries(param.nickname + endpointStatsAd, "GET")
    requestGames(param.nickname + endpointGames, "GET")

    return (
        <div>
            <PageTemplate
                backImgSrc={"/FirstSectionImage/TeamBackground.png"}
                sectionTitle={param.nickname.toUpperCase()}
                sectionSubtitle={param.city.toUpperCase() + " (" + param.abbreviation +")"}
                longSection={false}>
                    <div className="second-section">
                        <div className="team-profile-container">
                            <TeamInfo teamProfile={profile? profile[0] : ''}/>
                        </div>
                        <div className="team-stats">
                            <TeamHomeWinStats data={profile? profile[0] : ''}/>
                            <TeamTotalWinStats data={profile? profile[0] : ''}/>
                        </div>
                    </div>
                    <div className="third-section">
                        <div className="adversaries-stats">
                            <AdversaryStats data={adversaries}/>
                        </div>
                        <div className="games-list-container">
                            <TeamGameList games={games} imgRoot={"/TeamCard/"}/>
                        </div>
                    </div>
                    
            </PageTemplate>  
        </div>
    )
}

export default TeamProfile