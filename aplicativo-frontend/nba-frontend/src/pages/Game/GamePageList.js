import './GamePageList.scss'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import GameMatch from './GamePageMatch';

const GameList = ({games, imgRoot}) => {
    return (
        <div>
            <List className='game-page-list'>
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

export default GameList