import React from 'react'

const CatalogCard = ({itemInfo, index}) => {
    return (
        <div className="card" key={index}>
            <h2>{itemInfo}</h2>
        </div>
    )
}

export default CatalogCard