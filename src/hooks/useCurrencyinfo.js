import {useEffect,useSate} from "react"

function useCurrencyInfo(currency){
    const [data, setDate] = useSate({})
    useEffect(()=>{
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
        .then((res) => res.json()).then((res) => setDate(res[currency]))

        console.log(data);
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;