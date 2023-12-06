import {React, useEffect} from 'react'
import { useFetch } from '../../hooks/useFetch'
import CatalogGridModal from './CatalogGridModal'
import PageTemplate from '../../components/PageTemplate/PageTemplate'

const url = "arenas"

const Arena = () => {
    const {data: arenas, buildRequest} = useFetch(url)

    useEffect(() => {
        buildRequest("", "GET")
    }, [])
    
    
    return (
        <div>
            <PageTemplate 
                backImgSrc={"/FirstSectionImage/ArenaBackground.png"}
                sectionTitle={"ARENAS"}
                sectionSubtitle={"WHERE THE MAGIC HAPPENS"}
                longSection={false}
            >
                <CatalogGridModal itemsList={arenas} itemField={"name"} cardImagePathRoot={"ArenaCard/"} cardImageExt={".jpg"}/>
            </PageTemplate>
        </div>
    )
}

export default Arena