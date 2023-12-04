import './CatalogGrid.scss'

import React from 'react'
import CatalogCard from './CatalogCard'

const CatalogGrid = ({itemsList}) => {
    return (
        <div className="cardGrid">
            {itemsList && itemsList.map((item, i) => (
                    <CatalogCard itemInfo={item.name} index={i}/>
                ))
            }
        </div>
    )
}

export default CatalogGrid