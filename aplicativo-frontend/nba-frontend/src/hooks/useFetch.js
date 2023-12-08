import {useState, useEffect} from 'react'

const apiRoot = "http://localhost:8080/api/nba/"

export const useFetch = (url) => {
    const [request, setRequest] = useState(null)
    const [data, setData] = useState(null)
    const [api, setApi] = useState(apiRoot + url)

    const buildRequest = (param, method) => {
        if(method === "POST") {
            setRequest({
                method: method, 
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(param),
            })
        } else if (method === "GET" && param){
            setApi(api + "/" + param)
            setRequest({
                method:method
            })
        } else {
            setRequest({
                method:method
            })
        }
    };

    
    useEffect(() => {
        const fetchData = async () => {
            try{
                if(request && request.method){
                    console.log(api, request)
                    let fetchOptions = [api, request]
                    const res = await fetch(...fetchOptions)
                    const json = await res.json()
                    setData(json)
                }
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchData()

    },[api, request])

    return {data, buildRequest};
}