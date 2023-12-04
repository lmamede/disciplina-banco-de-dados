import './FirstSection.scss'
import React from 'react'
import Header from '../Header/Header'

const FirstSection = ({backImgSrc, sectionTitle, sectionSubtitle}) => {
    return (
        <div className='first-section' style={{ backgroundImage: `url(${backImgSrc})`}}>
            <div className="first-content center">
                <Header/>
                <p className='section-title'>{sectionTitle}</p>
                <p className='section-subtitle'>{sectionSubtitle}</p>
            </div>
        </div>
    )
}

export default FirstSection