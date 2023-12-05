import {useState, useEffect} from 'react'

const apiRoot = "http://localhost:8080/api/nba/"

export const useFetch = (url) => {
    const [request, setRequest] = useState(null)
    const [method, setMethod] = useState(null)
    const [data, setData] = useState(null)
    const [pathParam, setPathParam] = useState("")
    const [api, setApi] = useState(apiRoot + url)

    const buildRequest = (param, method) => {
        if(method === "POST") {
            setRequest({
                method, 
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(param),
            })
        } else if (method === "GET" && param){
            console.log(method + " - " + param)
            setPathParam(param)
        }
    };

    
    useEffect(() => {
        const fetchData = async () => {
            try{
                if(method === "GET") api+="/"+pathParam
                let fetchOptions = [api, request]
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setData(json)
                setMethod(null)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchData()

    },[api, pathParam, request])

    return {data, buildRequest};
}