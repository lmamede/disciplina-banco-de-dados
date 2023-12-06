import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import CatalogGrid from '../../components/Catalog/CatalogGrid'
import PageTemplate from '../../components/PageTemplate/PageTemplate'

const url = "seasons"

const Season = () => {
    const {data: seasons, buildRequest} = useFetch(url)
    buildRequest("", "GET")

    return (
        <div>
            <PageTemplate
                backImgSrc={"/FirstSectionImage/SeasonBackground.png"}
                sectionTitle={"SEASONS"}
                sectionSubtitle={"FROM 2003 T0 2022"}
                longSection={false}>
                    <CatalogGrid 
                        itemsList={seasons} 
                        itemField={"year"} 
                        cardImagePathRoot={""} 
                        cardImageExt={".png"}
                        to={"/seasons/profile"}
                    />
            </PageTemplate>
        </div>
    )
}

export default Season