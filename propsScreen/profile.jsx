let Profile=({name,address,contact,onClickGoto})=>{
    console.log(name,address,contact)
    return(
        <div style={{
            color:"red",
            display:"flex",
            backgroundColor:"yellow"
        }}>
            <h4>user profile</h4>
            <h5>name:{name}</h5>
            <h5>address:{address}</h5>
            <h5>contant:{contact}</h5>
            <button onClick={onClickGoto}>Goto</button>
        </div>
    )
}
export default Profile