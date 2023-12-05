import './ShortSection.scss'
import React from 'react'
import Header from '../Header/Header'

const ShortSection = ({backImgSrc, sectionTitle, sectionSubtitle}) => {
    return (
        <div className='short-section' style={{ backgroundImage: `url(${backImgSrc})`}}>
            <div className="short-content center">
                <Header/>
                <p className='section-title'>{sectionTitle}</p>
                <p className='section-subtitle'>{sectionSubtitle}</p>
            </div>
        </div>
    )
}

export default ShortSection