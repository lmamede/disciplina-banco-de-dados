import './CatalogGrid.scss'

import React from 'react'
import CatalogCard from './CatalogCard'

const CatalogGrid = ({itemsList, itemField, cardImagePathRoot, cardImageExt}) => {
    return (
        <div className="cardGrid">
            {itemsList && itemsList.map((item, i) => (
                    <CatalogCard itemInfo={String(item[itemField])} index={i} cardImagePathRoot={cardImagePathRoot} cardImageExt={cardImageExt}/>
                ))
            }
        </div>
    )
}

export default CatalogGrid