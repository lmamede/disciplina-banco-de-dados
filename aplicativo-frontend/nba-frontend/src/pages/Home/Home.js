import './Home.scss'
import React from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'

const Home = () => {
  return (
    <div>
        <PageTemplate 
            backImgSrc={"/FirstSectionImage/HomeBackground5.png"}
            sectionTitle={"NBA SEASON STATS"}
            sectionSubtitle={"FROM 2000 TO 2020"}
        >
            <p>Coloque o conteúdo aqui</p>
        </PageTemplate>
    </div>
  )
}

export default Home