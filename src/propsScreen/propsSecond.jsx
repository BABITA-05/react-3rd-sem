import { useState } from "react"

let PropsSecond=()=>{
    let [count,setCount]=useState(0) //let [s,f]=[0,f]
    // console.log(state)
    // let count=0
    return(
        <div>
            <h1>second page</h1>
            <h4>Count:{count}</h4>
            <button onClick={()=>{
                setCount(count+1)
                console.log("count:",count)
            }}>increment</button>
        </div>
    )
}
export default PropsSecond