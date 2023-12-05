import {React, useState, useEffect} from 'react'

const CatalogCard = ({itemInfo, index, cardImagePathRoot, cardImageExt}) => {
    const [textFormat, setTextFormat] = useState(itemInfo)
    const itemImage = cardImagePathRoot + itemInfo.replaceAll(" ", '_').toLowerCase() + cardImageExt

    useEffect(() => {
      return () => {
        setTextFormat(textFormat.replaceAll(" ", '\n').toUpperCase())
      }
    }, [itemInfo, textFormat, itemImage])
    

    return (
        <div className="card" key={index} style={{ backgroundImage: `url(${itemImage})`}}>
            <div className="container-opacity">
                <pre>{textFormat}</pre>
            </div>
        </div>
    )
}

export default CatalogCard