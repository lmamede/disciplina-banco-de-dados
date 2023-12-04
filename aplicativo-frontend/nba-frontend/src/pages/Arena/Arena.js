import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import CatalogGrid from '../../components/Catalog/CatalogGrid'
import PageTemplate from '../../components/PageTemplate/PageTemplate'

const url = "http://localhost:8080/api/nba/arenas"

const Arena = () => {
    const {data: arenas, buildRequest} = useFetch(url)
    buildRequest("", "GET")

    return (
        <div>
            <PageTemplate 
                backImgSrc={"/FirstSectionImage/HomeBackground5.png"}
                sectionTitle={"ARENAS"}
                sectionSubtitle={"WHERE THE MAGIC HAPPENS"}
            >
                <CatalogGrid itemsList={arenas}/>
            </PageTemplate>
        </div>
    )
}

export default Arena