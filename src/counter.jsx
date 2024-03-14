import { useEffect, useState } from "react"
import User from "./user";

// export default function Counter(){
//     const [count,setCount] =useState(0);
    
//     const handleAdd = () =>{
//            const newCount = count+1;
//            setCount(newCount)
//     }
//     const handleReduce=() =>{
//         const newCount = count-1;
//         setCount(newCount);
//     }

//     return(
//         <div style={{border: '2px solid yellow'}}>
//             <h3>Counter: {count}</h3>
//             <button onClick={handleAdd} style={{background:'gray'}}>Add</button>
//             <button onClick={handleReduce} style={{background:'gray',margin:'7px'}}>Reduce</button>
//         </div>
//     )
// }


export default function Users(){
    const [users,setUsers] = useState([]);
   
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    return(
        <div style={{border: '2px solid yellow'}}>
            <h1>users : {users.length}</h1>
           {
             users.map(user => <User user ={user}></User>)
           }
        </div>
       
    )
}


