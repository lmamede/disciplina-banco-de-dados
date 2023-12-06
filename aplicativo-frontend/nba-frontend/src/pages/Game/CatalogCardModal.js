import {React, useState, useEffect} from 'react'
import PlayerProfile from './PlayerProfile'

const CatalogCardModal = ({itemInfo, index, cardImagePathRoot, cardImageExt}) => {
    const [textFormat, setTextFormat] = useState(itemInfo.name)
    const itemImage = cardImagePathRoot + itemInfo.name.replaceAll(" ", '_').toLowerCase() + cardImageExt
    const [open, setOpen] = useState(false);

    useEffect(() => {
      return () => {
        setTextFormat(textFormat.replaceAll(" ", '\n').toUpperCase())
      }
    }, [textFormat])
    
    const handleClick = () => setOpen(true)

    return (
        <div className="card" onClick={handleClick} key={index} style={{ backgroundImage: `url(${itemImage})`}}>
            <div className="container-opacity">
                <pre>{textFormat}</pre>
            </div>
            {open && <PlayerProfile item={itemInfo} isOpen={open} imagProfile={itemImage}/>}
        </div>
    )
}

export default CatalogCardModal