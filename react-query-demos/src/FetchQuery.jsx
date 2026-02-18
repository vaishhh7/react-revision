import {useQuery} from "tanstack/react-query"

export default function FetchQuery(){
    const {data, isLoading, error, isError}= useQuery({
        queryKey:["users"],
        queryFn: async()=>{
            const res= await fetch ("https://jsonplaceholder.typicode.com/users")
            if (!res.ok) throw new Error("Failed to fetch")
            return (res.json())
        }
    })
    if (isLoading) return <p>Loading users</p>
    if (isError) return <p> error: {error.message}</p>

    return (
        <ul>
            {data.map(u=>{
                <li key ={u.id}>{u.name}</li>
            })}
        </ul>
    )
}