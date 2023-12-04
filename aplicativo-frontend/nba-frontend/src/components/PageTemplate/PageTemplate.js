import './PageTemplate.scss'
import React from 'react'
import ContentSection from './ContentSection'
import FirstSection from './FirstSection'

const PageTemplate = ({children, backImgSrc, sectionTitle, sectionSubtitle}) => {
    
    return (
        <div>
            <FirstSection backImgSrc={backImgSrc} sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle}/>
            <ContentSection>
                {children}
            </ContentSection>
        </div>
  )
}

export default PageTemplate