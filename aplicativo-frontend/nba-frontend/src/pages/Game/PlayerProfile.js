import './PlayerProfile.scss'
import {React, useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useFetch } from '../../hooks/useFetch'

const url = "player/profile"
const PlayerProfile = ({isOpen, item}) => {
    const [open, setOpen] = useState(isOpen);
    const handleClose = () => setOpen(false);
    const {data: player, buildRequest} = useFetch(url)

    useEffect(() => {
        buildRequest(item.name, "GET")
    }, [item])
        
    return (
        <div>
            <Modal
                className='modal-container'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal-content'>
                    <div className="arena-profile">
                        <h1>{player && player[0].name.toUpperCase()}</h1>
                        <label >
                            Nickname
                            <p>{player && player[0].nickname}</p>
                        </label>

                        <label >
                            Minutes Played
                            <p>{player && player[0].minutesPlayed}</p>
                        </label>
                    </div>
                </Box>
            </Modal>
        </div>
  )
}

export default PlayerProfile