import './ContentSection.scss'
import React from 'react'

const ContentSection = ({children}) => (
    <div className="content center">
        {children}
    </div>
)

export default ContentSection