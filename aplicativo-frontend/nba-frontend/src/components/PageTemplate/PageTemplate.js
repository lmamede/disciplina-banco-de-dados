import './PageTemplate.scss'
import {React, useState, useEffect} from 'react'
import ContentSection from './ContentSection'
import LongSection from './LongSection'
import ShortSection from './ShortSection'
import Footer from '../Footer/Footer'

const PageTemplate = ({children, backImgSrc, sectionTitle, sectionSubtitle, longSection}) => {
    const [useLongSection, setUseLongSection] = useState(longSection)

    useEffect(() => {
      return () => {
        setUseLongSection(longSection)
      }
    }, [longSection])
    

    return (
        <div>
            {useLongSection && (<LongSection backImgSrc={backImgSrc} sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle}/>)}
            {!useLongSection && (<ShortSection backImgSrc={backImgSrc} sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle}/>)}
            <ContentSection>
                {children}
            </ContentSection>
            <Footer/>
        </div>
  )
}

export default PageTemplate