import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const CatalogCard = ({itemInfo, itemField, index, cardImagePathRoot, cardImageExt, to}) => {
    const [textFormat, setTextFormat] = useState(String(itemInfo[itemField]))
    const itemImage = cardImagePathRoot + String(itemInfo[itemField]).replaceAll(" ", '_').toLowerCase() + cardImageExt

    useEffect(() => {
      return () => {
        setTextFormat(textFormat.replaceAll(" ", '\n').toUpperCase())
      }
    }, [textFormat, itemImage])
    

    return (
        <div className="card" key={index} style={{ backgroundImage: `url(${itemImage})`}}>
            <Link to={to} state={{param : itemInfo}}>
              <div className="container-opacity">
                  <pre>{textFormat}</pre>
              </div>
            </Link>
        </div>
    )
}

export default CatalogCard