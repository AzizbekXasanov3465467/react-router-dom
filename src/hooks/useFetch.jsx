import { useState, useEffect } from "react";

export function useFetch(url) {

    const[data, setData] = useState(null)
    const [isPending, setIspending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setIspending(true)
            try{
                const req = await fetch(url)
                if (!req.ok) {
                    throw new Error(req.statusText)
                }
                const data = await req.json()
                setData(data)
                setIspending(false)
            }
            catch (err) {
                setError(err.message)
                console.log(err.message);
                setIspending(false)
            }
        }
        fetchData()
    }, [url])
return {data, isPending, error}
}