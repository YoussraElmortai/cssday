export const load = async () =>{
    const fetchData = async () =>{
        const res = await fetch ("https://cssday.nl/data.json")
        const data = await res.json()
        return data.results
    }
     return{
        data: fetchData(),
    }
}