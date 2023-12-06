import './Home.scss'
import React from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'

const Home = () => {
  return (
    <div>
        <PageTemplate 
            backImgSrc={"/FirstSectionImage/HomeBackground5.png"}
            sectionTitle={"NBA SEASON STATS"}
            sectionSubtitle={"FROM 2003 TO 2022"}
            longSection={true}
        >
          <div className="home-content-container">
            <p>
              The data used in this project is avaible in Kaggle. <br />
              This project is part of UFRJ’s Computer Science Bsc Program.
            </p>
            <div className="logos">
              <img src="HomePage/kaggle_logo.png" alt="Kaggle Logo" />
              <img src="HomePage/ic_logo.png" alt="IC Logo" />
              <img src="HomePage/ufrj_logo.png" alt="UFRJ Logo" />
            </div>
            <p className='credit'>
              Dataset provided by Nathan Lauga
            </p>
          </div>
        </PageTemplate>
    </div>
  )
}

export default Home