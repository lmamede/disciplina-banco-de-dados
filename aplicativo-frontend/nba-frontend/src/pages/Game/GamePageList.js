import './GamePageList.scss'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import GamePageMatch from './GamePageMatch';

const GamePageList = ({games, imgRoot, to}) => {
    return (
        <List className='game-page-list'>
            {games && games.map((game, i) => (
                <div key={i}>
                    <ListItem alignItems="flex-start" key={i}>
                        <GamePageMatch 
                            game={game} key={i} imgRoot={imgRoot} to={to}
                        />
                        
                    </ListItem>
                    <Divider component="li" />
                </div>
            )
            )}        
        </List>
    )
}

export default GamePageList