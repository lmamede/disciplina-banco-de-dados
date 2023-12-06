import './ArenaProfile.scss'
import {React, useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useFetch } from '../../hooks/useFetch'

const url = "arenas/profile"
const ArenaProfile = ({isOpen, item, imagProfile}) => {
    const [open, setOpen] = useState(isOpen);
    const handleClose = () => setOpen(false);
    const {data: arena, buildRequest} = useFetch(url)

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
                    <img src={imagProfile} alt="" className='arena-image'/>
                    <div className="arena-profile">
                        <h1>{arena && arena[0].name.toUpperCase()}</h1>
                        <label >
                            Capacity
                            <p>{arena && arena[0].capacity}</p>
                        </label>

                        <label >
                            Owner
                            <p>{arena && arena[0].nickname}</p>
                        </label>

                        <label >
                            City
                            <p>{arena && arena[0].city}</p>
                        </label>
                    </div>
                </Box>
            </Modal>
        </div>
  )
}

export default ArenaProfile