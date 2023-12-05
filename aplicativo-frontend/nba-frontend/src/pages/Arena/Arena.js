import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import CatalogGrid from '../../components/Catalog/CatalogGrid'
import PageTemplate from '../../components/PageTemplate/PageTemplate'

const url = "arenas"

const Arena = () => {
    const {data: arenas, buildRequest} = useFetch(url)
    buildRequest("", "GET")

    return (
        <div>
            <PageTemplate 
                backImgSrc={"/FirstSectionImage/ArenaBackground.png"}
                sectionTitle={"ARENAS"}
                sectionSubtitle={"WHERE THE MAGIC HAPPENS"}
                longSection={false}
            >
                <CatalogGrid itemsList={arenas} itemField={"name"} cardImagePathRoot={"ArenaCard/"} cardImageExt={".jpg"}/>
            </PageTemplate>
        </div>
    )
}

export default Arena