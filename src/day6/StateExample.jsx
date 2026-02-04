import { useState } from "react"

let StateExample = () =>{
    //hook
    //let [a, b] = [10, f]
    let [count, setCount] = useState(10)

    return(
        <div>
            <h1>State Example</h1>
            <h4>
                Count : {count}
            </h4>
            {/* conditional rendering using ternary operator (? :) */}
            {count % 2 === 0 ? <h4>Even</h4> : <h4>Odd</h4>}
            <button onClick={()=>{
                setCount(count+1)
                console.log("count:", count)
            }}> Increment</button>
        </div>
    )
}
export default StateExample