import {useState, useEffect} from 'react'


export const useFetch = (url) => {
    const [request, setRequest] = useState(null)
    const [method, setMethod] = useState(null)
    const [data, setData] = useState(null)
    const [pathParam, setPathParam] = useState("")

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
                if(method === "GET") url+="/"+pathParam
                let fetchOptions = [url, request]
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setData(json)
                setMethod(null)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchData()

    },[url, pathParam, request])

    return {data, buildRequest};
}