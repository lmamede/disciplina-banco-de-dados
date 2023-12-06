import {useState, useEffect} from 'react'

const apiRoot = "http://localhost:6868/api/nba/"

export const useFetch = (url) => {
    const [request, setRequest] = useState(null)
    const [data, setData] = useState(null)
    var api = "";

    const buildRequest = (param, method) => {
        if(method === "POST") {
            setRequest({
                method, 
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(param),
            })
            api = apiRoot + url
        } else if (method === "GET" && param){
            api= apiRoot + url + "/" + param
        }else{
            api = apiRoot + url
        }
    };

    
    useEffect(() => {
        const fetchData = async () => {
            try{
                let fetchOptions = [api, request]
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setData(json)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchData()

    },[api, request])

    return {data, buildRequest};
}