import { useEffect, useState } from "react"

interface UseFetchProps<T> {
    data: T | null
    error: string | null 
    loading: boolean
}

export function useFetch<T>(url: string): UseFetchProps<T> {
    const [state, setState] = useState<UseFetchProps<T>>({
        data: null,
        error: null,
        loading: true
    })

    //! fetch data
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setState({data, error: null, loading: false}))
        .catch(error => setState({data: null, error: error.message, loading: false}))
    }, [url])

    return state

}