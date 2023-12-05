import React from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'

const Game = () => {
    return (
        <div>
            <PageTemplate
                backImgSrc={"/FirstSectionImage/GameBackground.png"}
                sectionTitle={"GAMES"}
                sectionSubtitle={"CHECK THE MATCHES"}
                longSection={false}>
            </PageTemplate>
        </div>
    )
}

export default Game