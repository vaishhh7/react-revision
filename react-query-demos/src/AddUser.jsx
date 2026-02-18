/* mutation basically changes something on the server

you can add a new user using post
delete using delete and updat eusing patch/put

query= get data
mutation = change data
*/
import {useMutation} from "2tanstack/react-query"
export default function AddUser(){
    const mutation = useMutation({

        mutationFn: async ()=>{
            const res= await fetch("https://jsonplaceholder.typicode.com/users",{
                method:"POST",
                body: JSON.stringify({name: "new user"}),
                headers:{"content type": "applicaton.json"}
            })
            return res.json()
        }
    })
    return (
        <button onClick={()=> mutation.mutate()}>
            {mutation.isLoading ? "Adding..": "Add User"}
        </button>
    )
}