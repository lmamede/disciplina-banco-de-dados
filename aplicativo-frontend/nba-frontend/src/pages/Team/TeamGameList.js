import './TeamGameList.scss'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import GameMatch from '../../components/GameList/GameMatch';
const TeamGameList = ({games, imgRoot}) => {
    return (
        <div>
            <p className='team-game-title'>GAMES</p>
             <List className='team-game-list'>
                {games && games.map((game, i) => (
                        <div>
                            <ListItem alignItems="flex-start">
                                <GameMatch 
                                    game={game} imgRoot={imgRoot}
                                />
                                
                            </ListItem>
                            <Divider component="li" />
                        </div>
                        
                    )
                )}        
            </List>
        </div>
    )
}

export default TeamGameList