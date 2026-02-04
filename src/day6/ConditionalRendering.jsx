import { useState } from "react"

let ConditionalRendering = () =>{
    let [age, setAge] = useState(50)
    return(
        <div>
            <h1>Conditional Rendering</h1>
            {/*Conditional rendering using ternary operator */}
            {age > 55? <h4>Senior Citizen</h4> : <h4>Not senior citizen</h4>}
            {/*Consitional renderingg using logical And (&&) operator */}

            {age> 53 && <h6>Age is greater than 50</h6>}

            {age>45 || <h6>Default value</h6>}



        </div>
    )
}
export default ConditionalRendering;