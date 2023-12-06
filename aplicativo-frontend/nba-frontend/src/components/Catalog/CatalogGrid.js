import './CatalogGrid.scss'

import React from 'react'
import CatalogCard from './CatalogCard'

const CatalogGrid = ({itemsList, itemField, cardImagePathRoot, cardImageExt, to}) => {
    return (
        <div className="cardGrid">
            {itemsList && itemsList.map((item, i) => (
                    <CatalogCard 
                        key={i}
                        itemInfo={String(item[itemField])} 
                        index={i} 
                        cardImagePathRoot={cardImagePathRoot} 
                        cardImageExt={cardImageExt}
                        to={to}/>
                ))
            }
        </div>
    )
}

export default CatalogGrid