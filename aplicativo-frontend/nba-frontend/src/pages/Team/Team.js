import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import CatalogGrid from '../../components/Catalog/CatalogGrid'
import PageTemplate from '../../components/PageTemplate/PageTemplate'

const url = "teams"

const Team = () => {
    const {data: teams, buildRequest} = useFetch(url)
    buildRequest("", "GET")

    return (
        <div>
            <PageTemplate
                backImgSrc={"/FirstSectionImage/TeamBackground.png"}
                sectionTitle={"TEAMS"}
                sectionSubtitle={"MEET THE CHAMPIONS"}
                longSection={false}>
                    <CatalogGrid 
                        itemsList={teams} 
                        itemField={"nickname"} 
                        cardImagePathRoot={"TeamCard/"} 
                        cardImageExt={".png"}
                        to={"/teams/profile"}
                    />
            </PageTemplate>            
        </div>
    )
}

export default Team