import './../../components/Catalog/CatalogGrid.scss'

import React from 'react'
import CatalogCardModal from './CatalogCardModal'

const CatalogGridModal = ({itemsList, itemField, cardImagePathRoot, cardImageExt}) => {
    return (
        <div className="cardGrid">
            {itemsList && itemsList.map((item, i) => (
                    <CatalogCardModal key={i} itemInfo={item} index={i} cardImagePathRoot={cardImagePathRoot} cardImageExt={cardImageExt}/>
                ))
            }
        </div>
    )
}

export default CatalogGridModal