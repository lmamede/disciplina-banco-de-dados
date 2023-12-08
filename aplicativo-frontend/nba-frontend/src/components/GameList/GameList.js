import './GameList.scss'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import GameMatch from './GameMatch';

const GameList = ({games, imgRoot}) => {
    return (
        <div>
            <p className='game-title'>GAMES</p>
             <List className='game-list'>
                {games && games.map((game, i) => (
                        <div key={i}>
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

export default GameList