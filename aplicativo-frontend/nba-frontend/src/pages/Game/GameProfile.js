import './GameProfile.scss'
import {React,useEffect} from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import { useLocation } from 'react-router-dom'
import MatchProfileCard from './MatchProfileCard'
import GameStats from '../../components/Stats/GameStats'
import { useFetch } from '../../hooks/useFetch'
import CatalogGridModal from './CatalogGridModal'
const urlGameProfile="games/profile"
const urlPlayer="players"

const GameProfile = () => {
    const location = useLocation()
    const { param } = location.state

    const {data: game, buildRequest: requestGameProfile} = useFetch(urlGameProfile)
    const {data: players, buildRequest: requestPlayers} = useFetch(urlPlayer)

    useEffect(() => {
        console.log(param)
        requestGameProfile(param.id, "GET")
        requestPlayers({"season" : param.season, "team_nickname" : param.teamHome}, "POST")
    }, [])
    
    
    return (
        <div>
            <PageTemplate
                backImgSrc={"/FirstSectionImage/GameBackground.png"}
                sectionTitle={"GAME"}
                sectionSubtitle={"STATS AND PLAYERS"}
                longSection={false}>
                    <div className="game-second-section">
                        <div className='profile-game-match'>
                            <MatchProfileCard game={param} imgRoot={"/TeamCard/"} to={""}/>
                        </div>
                        <div className="game-stats">
                            <GameStats data={game? game[0]:''}/>
                        </div>
                        <div className="game-numbers">

                        </div>
                    </div>
                    <div className="game-third-section">
                        <div className="game-players">
                            <CatalogGridModal itemsList={players} itemField={"name"}  cardImageExt={".jpg"}/>
                        </div>
                    </div>
            
            </PageTemplate>
        </div>
    )
}

export default GameProfile